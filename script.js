let currentWords = [];
let currentIndex = 0;
let score = 0;
let incorrectWords = [];

// 获取DOM元素
const startQuizBtn = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const results = document.getElementById('results');
const correctCount = document.getElementById('correct-count');
const errorCount = document.getElementById('error-count');
const errorList = document.getElementById('error-list');
const progressDisplay = document.getElementById('progress');

// 初始化测验
function initializeQuiz() {
    // 随机选择单词
    currentWords = [...wordsList]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(50, wordsList.length));
    currentIndex = 0;
    score = 0;
    incorrectWords = [];
    
    // 显示测验界面
    quizContainer.style.display = 'block';
    results.style.display = 'none';
    
    // 显示第一个问题
    showQuestion();
    updateProgress();
}

// 显示问题
function showQuestion() {
    if (currentIndex < currentWords.length) {
        wordDisplay.textContent = currentWords[currentIndex].chinese;
        userInput.value = '';
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
        feedback.textContent = '正确!';
        feedback.className = 'correct';
        score++;
    } else {
        feedback.textContent = `错误! 正确答案是: ${correctAnswer}`;
        feedback.className = 'incorrect';
        incorrectWords.push(currentWords[currentIndex]);
    }

    currentIndex++;
    updateProgress();
    
    setTimeout(() => {
        feedback.textContent = '';
        showQuestion();
    }, 1500);
}

// 更新进度
function updateProgress() {
    progressDisplay.textContent = `${currentIndex}/${currentWords.length}`;
}

// 显示结果
function showResults() {
    quizContainer.style.display = 'none';
    results.style.display = 'block';
    correctCount.textContent = score;
    errorCount.textContent = incorrectWords.length;
    
    errorList.innerHTML = incorrectWords
        .map(word => `<div>${word.chinese} - ${word.english}</div>`)
        .join('');
}

// 添加事件监听器
startQuizBtn.addEventListener('click', initializeQuiz);
submitBtn.addEventListener('click', checkAnswer);
userInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') checkAnswer();
});
document.getElementById('restart-btn').addEventListener('click', initializeQuiz);
