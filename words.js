// 先定义单词列表，后使用
const wordsList = [
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
        }
    },
    {
        english: "accept",
        chinese: "接受",
        phonetic: "[əkˈsept]",
        partOfSpeech: "v.",
        difficulty: "easy",
        frequency: "high",
        synonyms: ["receive", "agree to", "take"],
        example: {
            sentence: "I accept your apology.",
            translation: "我接受你的道歉。",
            situation: "general"
        }
    },
    // 可以继续添加更多单词...
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
