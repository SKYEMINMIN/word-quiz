let currentWords = [];
let currentIndex = 0;
let score = 0;
let incorrectWords = [];

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
const restartBtn = document.getElementById('restart-btn');
const progress = document.getElementById('progress');

function initializeQuiz() {
    // 随机选择50个单词
    currentWords = [...wordsList]
        .sort(() => Math.random() - 0.5)
        .slice(0, 50);
    currentIndex = 0;
    score = 0;
    incorrectWords = [];
    showQuestion();
    results.style.display = 'none';
    quizContainer.style.display = 'block';
    updateProgress();
}

function showQuestion() {
    if (currentIndex < currentWords.length) {
        wordDisplay.textContent = currentWords[currentIndex].chinese;
        userInput.value = '';
        userInput.focus();
    } else {
        showResults();
    }
}

function updateProgress() {
    progress.textContent = `${currentIndex}/${currentWords.length}`;
}

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

function showResults() {
    quizContainer.style.display = 'none';
    results.style.display = 'block';
    correctCount.textContent = score;
    errorCount.textContent = incorrectWords.length;
    
    errorList.innerHTML = incorrectWords
        .map(word => `<div>${word.chinese} - ${word.english}</div>`)
        .join('');
}

// 事件监听器
startQuizBtn.addEventListener('click', initializeQuiz);
submitBtn.addEventListener('click', checkAnswer);
userInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') checkAnswer();
});
restartBtn.addEventListener('click', initializeQuiz);
