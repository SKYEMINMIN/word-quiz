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

// 添加相应的 CSS
const style = document.createElement('style');
style.textContent = `
.feedback-card {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.feedback-card.correct .result-header {
    color: #4CAF50;
}

.feedback-card.wrong .result-header {
    color: #F44336;
}

.result-header {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 15px;
}

.word-info {
    margin-bottom: 15px;
}

.word-main {
    margin-bottom: 8px;
}

.word-english {
    font-size: 1.3em;
    font-weight: bold;
    margin-right: 10px;
}

.word-phonetic {
    color: #666;
    font-style: italic;
}

.word-chinese {
    font-size: 1.1em;
    color: #333;
}

.word-examples {
    border-left: 3px solid #e0e0e0;
    padding-left: 15px;
}

.example {
    margin: 10px 0;
}

.example-english {
    color: #444;
    margin-bottom: 4px;
}

.example-chinese {
    color: #666;
}

.progress {
    height: 4px;
    background: #e0e0e0;
    width: 100%;
    position: relative;
    margin-bottom: 20px;
}

.progress-bar {
    height: 100%;
    background: #4CAF50;
    transition: width 0.3s ease;
}

.results-container {
    text-align: center;
    padding: 20px;
}

.score {
    margin-top: 20px;
}

.score-number {
    font-size: 2em;
    font-weight: bold;
    color: #4CAF50;
}

.score-percentage {
    font-size: 1.2em;
    color: #666;
}

/* 确保左右分屏布局 */
.split-layout {
    display: flex;
    gap: 20px;
}

.left-panel {
    flex: 1;
    min-width: 300px;
}

.right-panel {
    flex: 1;
    min-width: 300px;
}

.quiz-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.word-display {
    font-size: 2em;
    text-align: center;
    margin: 20px 0;
}

.user-input {
    width: 100%;
    padding: 10px;
    font-size: 1.1em;
    border: 2px solid #ddd;
    border-radius: 4px;
    margin: 10px 0;
}

.user-input:focus {
    border-color: #4CAF50;
    outline: none;
}
`;

document.head.appendChild(style);

// 初始化隐藏测试容器
quizContainer.style.display = 'none';
