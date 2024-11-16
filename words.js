const wordsList = [
    {
        english: "ability",
        chinese: "能力，才能",
        phonetic: "[əˈbɪləti]",
        partOfSpeech: "n.",
        difficulty: "medium",
        frequency: "high",
        root: "abil-",
        synonyms: ["capability", "capacity", "skill", "talent"],
        antonyms: ["inability", "incapacity"],
        related: ["able", "ably", "disabled"],
        example: {
            sentence: "His ability to solve problems quickly is impressive.",
            translation: "他快速解决问题的能力令人印象深刻。",
            situation: "formal"
        },
        examples: [
            {
                sentence: "She has the ability to speak six languages.",
                translation: "她会说六种语言。"
            },
            {
                sentence: "The project will test your ability to work under pressure.",
                translation: "这个项目将考验你在压力下工作的能力。"
            }
        ],
        notes: "常用于学术和职场场合"
    },
    {
        english: "communicate",
        chinese: "交流，沟通",
        phonetic: "[kəˈmjuːnɪkeɪt]",
        partOfSpeech: "v.",
        difficulty: "medium",
        frequency: "high",
        root: "commun-",
        synonyms: ["talk", "converse", "correspond"],
        related: ["communication", "communicative", "communicator"],
        example: {
            sentence: "It's important to communicate effectively with your team.",
            translation: "与团队进行有效沟通很重要。",
            situation: "business"
        },
        examples: [
            {
                sentence: "Modern technology helps people communicate across borders.",
                translation: "现代技术帮助人们跨境交流。"
            },
            {
                sentence: "She finds it difficult to communicate her feelings.",
                translation: "她觉得很难表达自己的感受。"
            }
        ],
        notes: "正式场合常用"
    },
    {
        english: "develop",
        chinese: "发展，开发",
        phonetic: "[dɪˈveləp]",
        partOfSpeech: "v.",
        difficulty: "medium",
        frequency: "high",
        synonyms: ["grow", "evolve", "progress"],
        related: ["development", "developer", "developing"],
        example: {
            sentence: "We need to develop new skills to stay competitive.",
            translation: "我们需要培养新技能以保持竞争力。",
            situation: "business"
        },
        examples: [
            {
                sentence: "The company is developing a new software product.",
                translation: "公司正在开发一款新的软件产品。"
            },
            {
                sentence: "Children develop at different rates.",
                translation: "孩子们的发展速度各不相同。"
            }
        ],
        notes: "可用于多个领域，包括个人成长、产品开发等"
    },
    {
        english: "experience",
        chinese: "经验，经历",
        phonetic: "[ɪkˈspɪəriəns]",
        partOfSpeech: "n./v.",
        difficulty: "medium",
        frequency: "high",
        synonyms: ["knowledge", "practice", "encounter"],
        related: ["experienced", "experiential", "inexperienced"],
        example: {
            sentence: "She has ten years of teaching experience.",
            translation: "她有十年的教学经验。",
            situation: "professional"
        },
        examples: [
            {
                sentence: "We all experience difficulties at some point in life.",
                translation: "我们在生活中都会经历困难。"
            },
            {
                sentence: "The new virtual reality game offers an immersive experience.",
                translation: "这款新的虚拟现实游戏提供了身临其境的体验。"
            }
        ],
        notes: "既可作名词表示'经验'，也可作动词表示'经历'"
    },
    {
        english: "future",
        chinese: "未来，将来",
        phonetic: "[ˈfjuːtʃə]",
        partOfSpeech: "n./adj.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["forthcoming", "coming", "prospective"],
        antonyms: ["past", "previous"],
        example: {
            sentence: "We need to plan for the future.",
            translation: "我们需要规划未来。",
            situation: "general"
        },
        examples: [
            {
                sentence: "Future generations will benefit from these environmental policies.",
                translation: "未来几代人将从这些环境政策中受益。"
            },
            {
                sentence: "What are your future plans?",
                translation: "你未来有什么计划？"
            }
        ],
        notes: "在商业和规划场景中经常使用"
    }
    // 您可以继续添加更多单词...
];

// 定义工具对象
const wordsModule = {
    getAllWords() {
        return wordsList;
    },
    
    searchWord(keyword) {
        return wordsList.filter(word => 
            word.english.toLowerCase().includes(keyword.toLowerCase()) || 
            word.chinese.includes(keyword)
        );
    },
    
    getRandomWords(count) {
        const shuffled = [...wordsList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, wordsList.length));
    }
};

// 确保 wordsModule 在全局范围可用
window.wordsModule = wordsModule;
