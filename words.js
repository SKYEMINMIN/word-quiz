// words.js

// 删除之前的 module.exports，改为：
const wordsModule = {
    wordsList,
    searchWord(keyword) {
        return wordsList.filter(word => 
            word.english.includes(keyword) || 
            word.chinese.includes(keyword)
        );
    },
    getWordsByDifficulty(level) {
        return wordsList.filter(word => word.difficulty === level);
    },
    getWordsByPartOfSpeech(pos) {
        return wordsList.filter(word => word.partOfSpeech.includes(pos));
    },
    getHighFrequencyWords() {
        return wordsList.filter(word => word.frequency === "high" || word.frequency === "very high");
    }
};

// 如果需要在其他文件中使用，可以直接通过 wordsModule 访问
// 例如：wordsModule.searchWord('accept')
