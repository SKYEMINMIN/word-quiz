const wordsList = [
    {
        english: "friend",
        chinese: "朋友",
        phonetic: "[frend]",
        partOfSpeech: "n.", // 词性
        difficulty: "easy", // 难度等级
        frequency: "high", // 使用频率
        synonyms: ["companion", "buddy", "pal"], // 同义词
        example: {
            sentence: "Tom has been my best friend since childhood.",
            translation: "汤姆从童年起就是我最好的朋友。",
            situation: "social" // 使用场景
        },
        additionalExample: {
            sentence: "It's important to make new friends at school.",
            translation: "在学校交新朋友很重要。"
        },
        rootOrAffix: { // 词根词缀信息
            root: "friend-",
            related: ["friendly", "friendship", "unfriendly"]
        },
        imageUrl: "friend.jpg", // 配图URL（可选）
        note: "常用于日常社交场合" // 使用注意事项
    },
    {
        english: "communicate",
        chinese: "交流，沟通",
        phonetic: "[kəˈmjuːnɪkeɪt]",
        partOfSpeech: "v.",
        difficulty: "medium",
        frequency: "high",
        synonyms: ["talk", "converse", "correspond"],
        example: {
            sentence: "It's important to communicate effectively with your team.",
            translation: "与团队进行有效沟通很重要。",
            situation: "business"
        },
        additionalExample: {
            sentence: "Modern technology helps people communicate across borders.",
            translation: "现代技术帮助人们跨境交流。"
        },
        rootOrAffix: {
            root: "commun-",
            related: ["communication", "communicative", "communicator"]
        },
        note: "正式场合常用"
    },
    {
        english: "appreciate",
        chinese: "感激；欣赏",
        phonetic: "[əˈpriːʃieɪt]",
        partOfSpeech: "v.",
        difficulty: "medium",
        frequency: "medium",
        synonyms: ["value", "esteem", "be grateful for"],
        example: {
            sentence: "I really appreciate your help with this project.",
            translation: "我真的很感激你对这个项目的帮助。",
            situation: "general"
        },
        additionalExample: {
            sentence: "Not everyone can appreciate classical music.",
            translation: "不是每个人都能欣赏古典音乐。"
        },
        rootOrAffix: {
            root: "prec-",
            related: ["appreciation", "appreciative", "appreciable"]
        },
        note: "可表达感谢或欣赏"
    }
];

// 测试函数
function testWordDisplay() {
    // 随机选择一个单词
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    
    console.log("\n=== 单词测试卡 ===");
    console.log(`英文: ${randomWord.english}`);
    console.log(`中文: ${randomWord.chinese}`);
    console.log(`音标: ${randomWord.phonetic}`);
    console.log(`词性: ${randomWord.partOfSpeech}`);
    console.log(`难度: ${randomWord.difficulty}`);
    console.log(`使用频率: ${randomWord.frequency}`);
    console.log("\n--- 例句 ---");
    console.log(`例句: ${randomWord.example.sentence}`);
    console.log(`翻译: ${randomWord.example.translation}`);
    console.log(`场景: ${randomWord.example.situation}`);
    console.log("\n--- 补充例句 ---");
    console.log(`例句: ${randomWord.additionalExample.sentence}`);
    console.log(`翻译: ${randomWord.additionalExample.translation}`);
    console.log("\n--- 相关词 ---");
    console.log(`同义词: ${randomWord.synonyms.join(", ")}`);
    if (randomWord.rootOrAffix) {
        console.log(`词根: ${randomWord.rootOrAffix.root}`);
        console.log(`相关词: ${randomWord.rootOrAffix.related.join(", ")}`);
    }
    console.log(`\n注释: ${randomWord.note}`);
}

// 运行测试
testWordDisplay();
