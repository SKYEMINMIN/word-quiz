import json
import os
import re

def clean_text(text):
    """清理文本"""
    return text.strip()

def parse_single_format(line):
    """解析格式: 单词 中文[音标] 例句1|翻译1#例句2|翻译2"""
    try:
        # 使用正则表达式更准确地匹配模式
        pattern = r'^(\w+)\s+([^$$]+)\[([^$$]+)\]\s*([^|]+)\|([^#]+)#([^|]+)\|(.+)$'
        match = re.match(pattern, line.strip())
        
        if not match:
            return None
            
        word, chinese, phonetic, eng1, zh1, eng2, zh2 = match.groups()
        
        return {
            "word": word.strip(),
            "chinese": chinese.strip(),
            "phonetic": f"[{phonetic.strip()}]",
            "example1": {
                "en": eng1.strip(),
                "zh": zh1.strip()
            },
            "example2": {
                "en": eng2.strip(),
                "zh": zh2.strip()
            }
        }

    except Exception as e:
        print(f"解析行出错: {line}")
        print(f"错误: {str(e)}")
        return None

def parse_line(line):
    """解析单行文本"""
    try:
        line = clean_text(line)
        if not line:
            return None, "空行"
        
        result = parse_single_format(line)
        if result:
            return result, None
        
        if line.strip():  # 如果不是空行但解析失败，归类为"格式不匹配"
            return None, "格式不匹配"
            
        return None, "空行"
    
    except Exception as e:
        print(f"解析行异常: {line} - {str(e)}")
        return None, f"解析错误: {str(e)}"

def process_text_file(input_file):
    """处理文本文件"""
    words = []
    skipped_lines = {
        "空行": [],
        "格式不匹配": [],
        "解析错误": []
    }
    
    try:
        # 尝试不同编码读取文件
        encodings = ['utf-8', 'gbk', 'gb2312', 'utf-16']
        content = None
        used_encoding = None
        
        for encoding in encodings:
            try:
                with open(input_file, 'r', encoding=encoding) as f:
                    content = f.readlines()
                used_encoding = encoding
                break
            except UnicodeDecodeError:
                continue
        
        if content is None:
            raise Exception("无法以任何支持的编码方式读取文件")
        
        print(f"成功使用 {used_encoding} 编码读取文件")
        
        total_lines = len(content)
        print(f"共读取 {total_lines} 行内容")
        
        for i, line in enumerate(content, 1):
            if i % 100 == 0:
                print(f"已处理 {i}/{total_lines} 行...")
            
            result, skip_reason = parse_line(line)
            if result:
                words.append(result)
            else:
                if skip_reason in skipped_lines:
                    skipped_lines[skip_reason].append(line.strip())
        
        # 只保留非空的跳过类别
        skipped_lines = {k: v for k, v in skipped_lines.items() if v}
        
        return words, skipped_lines, total_lines
    
    except Exception as e:
        print(f"文件处理错误: {str(e)}")
        raise

def save_words_to_json(words, output_file):
    """保存单词到JS文件"""
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            # 添加 JavaScript 变量声明
            f.write('const words = ')
            # 写入 JSON 数据
            json.dump(words, f, ensure_ascii=False, indent=2)
            # 添加分号结尾
            f.write(';')
        print(f"成功保存到文件: {output_file}")
    except Exception as e:
        print(f"保存文件时出错: {str(e)}")
        raise

def print_summary(words, skipped_lines, total_lines):
    """打印处理统计摘要"""
    print("\n=== 处理统计摘要 ===")
    print(f"总行数: {total_lines}")
    print(f"成功解析: {len(words)} 个单词")
    
    print("\n=== 跳过行详细分类 ===")
    for category, lines in skipped_lines.items():
        print(f"\n{category}: {len(lines)} 行")
        if lines:
            print("示例:")
            for line in lines[:3]:  # 只显示前3个例子
                print(f"  - {line}")

def main():
    """主函数"""
    while True:
        try:
            # 获取输入文件名
            input_file = input("请输入要处理的文本文件名（输入 q 退出）: ").strip()
            if input_file.lower() == 'q':
                break
                
            if not os.path.exists(input_file):
                print(f"错误: 文件 '{input_file}' 不存在")
                continue
            
            print(f"\n正在处理文件 '{input_file}'...")
            
            # 处理文件
            words, skipped_lines, total_lines = process_text_file(input_file)
            
            # 如果成功解析了单词
            if words:
                # 使用固定的输出文件名
                output_file = 'words.js'
                
                # 保存结果
                save_words_to_json(words, output_file)
            
            # 打印统计信息
            print_summary(words, skipped_lines, total_lines)
            
        except Exception as e:
            print(f"\n处理过程中出错: {str(e)}")
            print("\n详细错误信息:")
            import traceback
            print(traceback.format_exc())
        
        # 询问是否继续
        if input("\n是否继续？(y/n): ").lower() != 'y':
            break
    
    print("\n程序结束")

if __name__ == "__main__":
    main()
