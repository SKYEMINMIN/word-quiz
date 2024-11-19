let currentWordIndex = 0;
let correctCount = 0;
let isQuizActive = false;

// 获取DOM元素
const startButton = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const results = document.getElementById('results');
const progress = document.getElementById('progress');

// 开始测试
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        startQuiz();
    }
});

function startQuiz() {
    isQuizActive = true;
    currentWordIndex = 0;
    correctCount = 0;
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    feedback.innerHTML = '';
    results.innerHTML = '';
    showNextWord();
}

function showNextWord() {
    if (currentWordIndex < words.length) {
        const currentWord = words[currentWordIndex];
        wordDisplay.textContent = currentWord.chinese;
        userInput.value = '';
        userInput.focus();
        updateProgress();
    } else {
        showResults();
    }
}

// 检查答案
userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && isQuizActive) {
        checkAnswer();
    }
});

function checkAnswer() {
    const currentWord = words[currentWordIndex];
    const userAnswer = userInput.value.trim().toLowerCase();
    const correctAnswer = currentWord.word.toLowerCase();

    if (userAnswer === correctAnswer) {
        correctCount++;
        feedback.innerHTML = createFeedbackCard(currentWord, true);
    } else {
        feedback.innerHTML = createFeedbackCard(currentWord, false);
    }

    currentWordIndex++;
    setTimeout(showNextWord, 1500);
}

function createFeedbackCard(word, isCorrect) {
    return `
        <div class="feedback-card ${isCorrect ? 'correct' : 'wrong'}">
            <div class="result-header">
                ${isCorrect ? '✓ 正确!' : '✗ 错误!'}
            </div>
            <div class="word-info">
                <div class="word-main">
                    <span class="word-english">${word.word}</span>
                    <span class="word-phonetic">${word.phonetic}</span>
                </div>
                <div class="word-chinese">${word.chinese}</div>
            </div>
            <div class="word-examples">
                <div class="example">
                    <div class="example-english">${word.example1.en}</div>
                    <div class="example-chinese">${word.example1.zh}</div>
                </div>
                <div class="example">
                    <div class="example-english">${word.example2.en}</div>
                    <div class="example-chinese">${word.example2.zh}</div>
                </div>
            </div>
        </div>
    `;
}

function updateProgress() {
    const percent = (currentWordIndex / words.length) * 100;
    progress.style.width = `${percent}%`;
}

function showResults() {
    isQuizActive = false;
    quizContainer.style.display = 'none';
    startButton.style.display = 'block';
    startButton.textContent = '重新开始';
    
    const percentage = (correctCount / words.length) * 100;
    results.innerHTML = `
        <div class="results-container">
            <h2>测试结束</h2>
            <div class="score">
                <div class="score-number">${correctCount}/${words.length}</div>
                <div class="score-percentage">${percentage.toFixed(1)}%</div>
            </div>
        </div>
    `;
}

