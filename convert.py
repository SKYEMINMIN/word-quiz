import json
import os
import re
import traceback
def handle_multiple_words(line):
    """处理带斜杠的多个单词"""
    words = []
    # 分割英文和中文部分
    if '/' in line and '[' in line:
        # 处理带音标的情况
        parts = line.split('[')
        eng_part = parts[C_0]().strip()
        remaining = '[' + '['.join(parts[1:])
        eng_words = [w.strip() for w in eng_part.split('/')]
        for word in eng_words:
            if word:
                words.append(f"{word} {remaining}")
    elif '/' in line:
        # 处理不带音标的情况
        eng_chi = line.split(' ', 1)
        if len(eng_chi) == 2:
            eng_part = eng_chi[C_0]()
            chi_part = eng_chi[C_1]()
            eng_words = [w.strip() for w in eng_part.split('/')]
            for word in eng_words:
                if word:
                    words.append(f"{word} {chi_part}")
    return words

def extract_phonetic(text):
    """提取音标信息"""
    phonetic = ""
    if '[' in text and ']' in text:
        start = text.find('[')
        end = text.find(']', start) + 1
        phonetic = text[start:end]
        # 如果音标中包含逗号，只取第一个
        if ',' in phonetic:
            base = phonetic[1:-1]  # 去掉括号
            first_phonetic = base.split(',')[C_0]().strip()
            phonetic = f"[{first_phonetic}]"
        text = text[:start].strip() + text[end:].strip()
    return text, phonetic
def parse_single_word(line):
    """解析单个单词行"""
    try:
        # 先分离单词和释义
        parts = line.split(' ', 1)
        if len(parts) != 2:
            return None, "格式不匹配"
            
        english = parts[C_0]().strip()
        remaining = parts[C_1]().strip()
        
        # 提取音标
        chinese, phonetic = extract_phonetic(remaining)
        
        if not english or not chinese:
            return None, "内容不完整"
            
        word_data = {
            "english": english,
            "chinese": chinese,
            "phonetic": phonetic,
            "pos": "",
            "example": {
                "english": f"This is {english}.",
                "chinese": f"这是{chinese}。"
            }
        }
        return word_data, None
        
    except Exception as e:
        return None, f"解析错误: {str(e)}"


def clean_text(text):
    """清理文本中的特殊字符"""
    replacements = {
        '⻚': '页', '⼥': '女', '⻓': '长', '⼲': '干', '⺟': '母', 
        '⽗': '父', '⼈': '人', '⼩': '小', '⼤': '大', '⼦': '子', 
        '⻘': '青', '⼉': '儿', '⼊': '入', '⼜': '又', '⼼': '心',
        '⽣': '生', '⼴': '广', '⼝': '口', '⼿': '手', '⼭': '山'
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

def is_header_line(line):
    """检查是否为标题行"""
    patterns = [
        r'^第\s*\d+\s*[页⻚]',
        r'^【.*】$',
        r'^\d+\s*天',
        r'^目录',
        r'^[\s\d]+$'
    ]
    return any(re.match(pattern, line) for pattern in patterns)

def parse_line(line):
    """解析单行文本"""
    try:
        line = clean_text(line.strip())
        if not line:
            return None, "空行"
            
        if is_header_line(line):
            return None, "标题行"

        # 处理补充信息行
        if line.startswith('[') or line.startswith('（'):
            return None, "补充信息行"
            
        # 处理多选项格式
        if '/' in line:
            word_lines = handle_multiple_words(line)
            if word_lines:
                results = []
                for word_line in word_lines:
                    result, _ = parse_single_word(word_line)
                    if result:
                        results.append(result)
                if results:
                    return results, None
            return None, "格式不匹配"
            
        # 处理单个单词
        return parse_single_word(line)
        
    except Exception as e:
        return None, f"解析错误: {str(e)}"


def process_text_file(input_file):
    """处理文本文件"""
    words = []
    skipped_lines = {
        "标题行": [],
        "空行": [],
        "格式不匹配": [],
        "补充信息行": [],
        "其他": []
    }
    
    try:
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
            line = line.strip()
            if not line:
                skipped_lines["空行"].append(line)
                continue
                
            if i % 100 == 0:
                print(f"已处理 {i}/{total_lines} 行...")
                
            # 在 process_text_file 函数中修改这部分：
result, skip_reason = parse_line(line)
if result:
    if isinstance(result, list):
        # 处理多个单词的情况
        words.extend(result)
    else:
        words.append(result)
else:
    if skip_reason in skipped_lines:
        skipped_lines[skip_reason].append(line)
    else:
        skipped_lines["其他"].append(line)

        
        skipped_lines = {k: v for k, v in skipped_lines.items() if v}
        
        return words, skipped_lines, total_lines
        
    except Exception as e:
        print(f"文件处理错误: {str(e)}")
        raise

def save_json(words, output_file='wordlist.json'):
    """保存为 JSON 格式"""
    data = {
        "default": {
            "name": "词汇表",
            "words": words
        }
    }
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def save_with_confirmation(words, skipped_lines, total_lines):
    """显示统计信息并请求确认后保存"""
    print("\n=== 处理统计摘要 ===")
    print(f"总行数: {total_lines}")
    print(f"成功解析: {len(words)} 个单词")
    print(f"跳过行数: {sum(len(lines) for lines in skipped_lines.values())}")
    
    print("\n=== 跳过行详细分类 ===")
    for reason, lines in skipped_lines.items():
        print(f"\n{reason}: {len(lines)} 行")
        print("示例:")
        for line in lines[:3]:
            print(f"  - {line}")
    
    print("\n=== 成功解析的单词示例 ===")
    for i, word in enumerate(words[:5], 1):
        print(f"{i}. {word['english']} | {word['chinese']} | {word['phonetic']}")
    
    while True:
        choice = input("\n是否确认保存？(y/n): ").lower().strip()
        if choice == 'y':
            save_json(words)
            print(f"\n成功保存 {len(words)} 个单词到 wordlist.json")
            return True
        elif choice == 'n':
            print("已取消保存")
            return False
        else:
            print("请输入 y 或 n")

def main():
    while True:
        try:
            print("\n=== 单词表转换工具 ===")
            print("将文本格式的单词表转换为JSON格式")
            print("支持的格式：")
            print("1. word 释义[音标]")
            print("2. word 释义")
            print("\n请输入文件名，或输入 'q' 退出")
            
            input_file = input("\n请输入文本文件名（例如 3500.txt）: ").strip()
            
            if input_file.lower() == 'q':
                print("程序已退出")
                break
                
            if not os.path.exists(input_file):
                print(f"错误：文件 '{input_file}' 不存在！")
                print("请确认文件名是否正确，以及文件是否在当前目录下。")
                continue
            
            if os.path.getsize(input_file) == 0:
                print(f"错误：文件 '{input_file}' 是空文件！")
                continue
                
            print(f"\n正在处理文件 '{input_file}'...")
            words, skipped_lines, total_lines = process_text_file(input_file)
            
            if not words:
                print("\n警告：没有找到符合格式的单词！")
                print("请检查文件格式是否正确。")
                continue
                
            if save_with_confirmation(words, skipped_lines, total_lines):
                choice = input("\n是否继续处理其他文件？(y/n): ").lower().strip()
                if choice != 'y':
                    print("程序已退出")
                    break
            
        except Exception as e:
            print(f"\n处理过程中出错: {str(e)}")
            print("\n详细错误信息:")
            traceback.print_exc()
            
            choice = input("\n是否继续？(y/n): ").lower().strip()
            if choice != 'y':
                print("程序已退出")
                break

if __name__ == "__main__":
    main()
