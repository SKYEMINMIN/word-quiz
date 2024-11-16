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
    { english: 'food', chinese: '食物' },
    { english: 'house', chinese: '房子' },
    { english: 'car', chinese: '汽车' },
    { english: 'tree', chinese: '树' },
    { english: 'sun', chinese: '太阳' },
    { english: 'moon', chinese: '月亮' },
    { english: 'star', chinese: '星星' },
    { english: 'school', chinese: '学校' },
    { english: 'teacher', chinese: '老师' },
    { english: 'student', chinese: '学生' },
    { english: 'friend', chinese: '朋友' }
];

// 获取DOM元素
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreValue = document.getElementById('score-value');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const resultContainer = document.getElementById('result-container');
const errorCount = document.getElementById('error-count');
const errorWords = document.getElementById('error-words');
const restartBtn = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz-container');

let currentWords = [];
let currentIndex = 0;
let score = 0;
let incorrectWords = [];

// 初始化测试
function initializeQuiz() {
    currentWords = [...words]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(50, words.length));
    currentIndex = 0;
    score = 0;
    incorrectWords = [];
    scoreValue.textContent = score;
    updateProgress();
    displayNewWord();
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    userInput.value = '';
    feedback.textContent = '';
}

// 更新进度条
function updateProgress() {
    const progress = (currentIndex / currentWords.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentIndex}/${currentWords.length}`;
}

// 显示新的单词
function displayNewWord() {
    if (currentIndex < currentWords.length) {
        wordDisplay.textContent = currentWords[currentIndex].chinese;
        userInput.value = '';
        feedback.textContent = '';
        userInput.focus();
    } else {
        showResults();
    }
}

// 检查答案
function checkAnswer() {
    const userAnswer = userInput.value.toLowerCase().trim();
    const correctAnswer = currentWords[currentIndex].english.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Good!';
        feedback.className = 'feedback correct';
        score++;
        scoreValue.textContent = score;
    } else {
        feedback.textContent = `Incorrect. The answer is: ${correctAnswer}`;
        feedback.className = 'feedback incorrect';
        incorrectWords.push(currentWords[currentIndex]);
    }

    currentIndex++;
    updateProgress();

    setTimeout(() => {
        displayNewWord();
    }, 1500);
}

// 显示结果
function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    errorCount.textContent = incorrectWords.length;
    
    errorWords.innerHTML = incorrectWords
        .map(word => `<div>${word.chinese} - ${word.english}</div>`)
        .join('');
}

// 事件监听器
submitBtn.addEventListener('click', checkAnswer);
userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
restartBtn.addEventListener('click', initializeQuiz);

// 初始化游戏
initializeQuiz();
