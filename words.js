const wordsList = [
    // A类词汇 - 基础必备
    {
        english: "ability",
        chinese: "能力",
        phonetic: "[əˈbɪləti]",
        partOfSpeech: "n.",
        difficulty: "medium",
        frequency: "high",
        synonyms: ["capability", "capacity", "skill"],
        antonyms: ["inability", "incapability"],
        example: {
            sentence: "His ability to solve problems quickly is impressive.",
            translation: "他快速解决问题的能力令人印象深刻。",
            situation: "formal"
        },
        additionalExample: {
            sentence: "She has the ability to speak five languages.",
            translation: "她会说五种语言。"
        },
        rootOrAffix: {
            root: "abil-",
            meaning: "能够",
            related: ["able", "enable", "disable"]
        },
        note: "常用于描述个人技能和能力",
        level: "CET4"
    },
    {
        english: "abroad",
        chinese: "在国外",
        phonetic: "[əˈbrɔːd]",
        partOfSpeech: "adv.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["overseas", "internationally"],
        example: {
            sentence: "He plans to study abroad next year.",
            translation: "他计划明年出国留学。",
            situation: "education"
        },
        additionalExample: {
            sentence: "Many people like traveling abroad during holidays.",
            translation: "许多人喜欢在假期出国旅行。"
        },
        rootOrAffix: {
            prefix: "a-",
            root: "broad",
            meaning: "宽的，广的"
        },
        note: "常用于教育和旅行语境",
        level: "CET4"
    },
    {
        english: "accept",
        chinese: "接受",
        phonetic: "[əkˈsept]",
        partOfSpeech: "v.",
        difficulty: "easy",
        frequency: "very high",
        synonyms: ["receive", "agree to", "take"],
        antonyms: ["reject", "refuse", "decline"],
        example: {
            sentence: "I accept your apology.",
            translation: "我接受你的道歉。",
            situation: "general"
        },
        additionalExample: {
            sentence: "The university accepted him as a graduate student.",
            translation: "这所大学录取他为研究生。"
        },
        rootOrAffix: {
            prefix: "ac-",
            root: "cept",
            meaning: "拿，取",
            related: ["acceptable", "acceptance", "unacceptable"]
        },
        note: "可用于正式和非正式场合",
        level: "CET4",
        collocation: ["accept responsibility", "accept an offer", "accept the fact"]
    },
    {
        english: "accomplish",
        chinese: "完成，实现",
        phonetic: "[əˈkʌmplɪʃ]",
        partOfSpeech: "v.",
        difficulty: "medium",
        frequency: "medium",
        synonyms: ["achieve", "complete", "fulfill"],
        antonyms: ["fail", "neglect"],
        example: {
            sentence: "She accomplished all her goals for this year.",
            translation: "她实现了她今年所有的目标。",
            situation: "achievement"
        },
        additionalExample: {
            sentence: "It takes time to accomplish great things.",
            translation: "成就大事需要时间。"
        },
        rootOrAffix: {
            prefix: "ac-",
            root: "compli",
            meaning: "完成",
            related: ["accomplishment", "accomplished"]
        },
        note: "多用于描述重要成就",
        level: "CET6",
        collocation: ["accomplish a task", "accomplish a mission", "accomplish objectives"]
    },
    {
        english: "accurate",
        chinese: "准确的，精确的",
        phonetic: "[ˈækjərət]",
        partOfSpeech: "adj.",
        difficulty: "medium",
        frequency: "high",
        synonyms: ["precise", "exact", "correct"],
        antonyms: ["inaccurate", "wrong", "imprecise"],
        example: {
            sentence: "The weather forecast was very accurate.",
            translation: "天气预报非常准确。",
            situation: "general"
        },
        additionalExample: {
            sentence: "Scientists need accurate data for their research.",
            translation: "科学家们需要准确的数据来进行研究。"
        },
        rootOrAffix: {
            root: "accur-",
            related: ["accuracy", "accurately", "inaccuracy"]
        },
        note: "常用于科学和技术领域",
        level: "CET4",
        collocation: ["accurate information", "accurate measurement", "accurate description"]
    },
    {
        english: "adapt",
        chinese: "适应，调整",
        phonetic: "[əˈdæpt]",
        partOfSpeech: "v.",
        difficulty: "medium",
        frequency: "high",
        synonyms: ["adjust", "accommodate", "modify"],
        antonyms: ["maintain", "preserve"],
        example: {
            sentence: "It took him some time to adapt to the new environment.",
            translation: "他花了一些时间来适应新环境。",
            situation: "change"
        },
        additionalExample: {
            sentence: "Animals must adapt to survive climate change.",
            translation: "动物必须适应气候变化才能生存。"
        },
        rootOrAffix: {
            root: "apt-",
            meaning: "适合的",
            related: ["adaptable", "adaptation", "adaptive"]
        },
        note: "既可以是及物动词也可以是不及物动词",
        level: "CET4",
        collocation: ["adapt to change", "adapt quickly", "adapt well"]
    },
    {
        english: "advantage",
        chinese: "优势，有利条件",
        phonetic: "[ədˈvæntɪdʒ]",
        partOfSpeech: "n.",
        difficulty: "easy",
        frequency: "very high",
        synonyms: ["benefit", "merit", "edge"],
        antonyms: ["disadvantage", "drawback"],
        example: {
            sentence: "The main advantage of living in the city is convenience.",
            translation: "住在城市的主要优势是便利。",
            situation: "analysis"
        },
        additionalExample: {
            sentence: "He took advantage of the opportunity to study abroad.",
            translation: "他抓住了出国留学的机会。"
        },
        rootOrAffix: {
            prefix: "ad-",
            root: "vant",
            related: ["advantageous", "disadvantage"]
        },
        note: "可用作名词和动词短语(take advantage of)",
        level: "CET4",
        collocation: ["competitive advantage", "take advantage of", "gain an advantage"]
    },
    {
        english: "adventure",
        chinese: "冒险，奇遇",
        phonetic: "[ədˈventʃər]",
        partOfSpeech: "n./v.",
        difficulty: "easy",
        frequency: "medium",
        synonyms: ["exploit", "quest", "venture"],
        example: {
            sentence: "Their trip to the Amazon was quite an adventure.",
            translation: "他们的亚马逊之行是一次很大的冒险。",
            situation: "travel"
        },
        additionalExample: {
            sentence: "Children love reading adventure stories.",
            translation: "孩子们喜欢读冒险故事。"
        },
        rootOrAffix: {
            root: "vent-",
            meaning: "来，到达",
            related: ["adventurous", "adventurer"]
        },
        note: "常用于旅行和文学语境",
        level: "CET4",
        collocation: ["adventure tourism", "sense of adventure", "go on an adventure"]
    }
];

// 搜索功能
function searchWord(keyword) {
    return wordsList.filter(word => 
        word.english.includes(keyword) || 
        word.chinese.includes(keyword)
    );
}

// 按难度获取单词
function getWordsByDifficulty(level) {
    return wordsList.filter(word => word.difficulty === level);
}

// 获取某个词性的所有单词
function getWordsByPartOfSpeech(pos) {
    return wordsList.filter(word => word.partOfSpeech.includes(pos));
}

// 获取高频词
function getHighFrequencyWords() {
    return wordsList.filter(word => word.frequency === "high" || word.frequency === "very high");
}

// 导出功能
module.exports = {
    wordsList,
    searchWord,
    getWordsByDifficulty,
    getWordsByPartOfSpeech,
    getHighFrequencyWords
};
