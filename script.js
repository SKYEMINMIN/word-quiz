// 单词库
const words = [
    { english: 'apple', chinese: '苹果' },
    { english: 'banana', chinese: '香蕉' },
    { english: 'orange', chinese: '橙子' },
    { english: 'dog', chinese: '狗' },
    { english: 'cat', chinese: '猫' },
    { english: 'book', chinese: '书' },
    { english: 'computer', chinese: '电脑' },
    { english: 'phone', chinese: '手机' },
    { english: 'water', chinese: '水' },
    { english: 'food', chinese: '食物' }
];

// 获取DOM元素
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
const scoreValue = document.getElementById('score-value');

let currentWord = null;
let score = 0;

// 随机选择一个单词
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// 显示新的单词
function displayNewWord() {
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord.chinese;
    userInput.value = '';
    result.textContent = '';
}

// 检查答案
function checkAnswer() {
    const userAnswer = userInput.value.toLowerCase().trim();
    const correctAnswer = currentWord.english.toLowerCase();

    if (userAnswer === correctAnswer) {
        result.textContent = '正确！';
        result.style.color = 'green';
        score++;
        scoreValue.textContent = score;
        setTimeout(displayNewWord, 1000);
    } else {
        result.textContent = `错误！正确答案是: ${correctAnswer}`;
        result.style.color = 'red';
    }
}

// 添加事件监听器
submitBtn.addEventListener('click', checkAnswer);
userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// 初始化游戏
displayNewWord();
