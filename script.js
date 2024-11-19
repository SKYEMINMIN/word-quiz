// 在开头获取DOM元素
const wordCounter = document.getElementById('word-counter');


const QUIZ_WORD_COUNT = 30; // 新增：定义每次测试的单词数量
let currentQuizWords = []; // 新增：存储当前测试的单词数组

// 新增：随机抽取单词的函数
function getRandomWords(wordArray, count) {
    const shuffled = [...wordArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


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

// 在startQuiz函数中初始化计数器
function startQuiz() {
    isQuizActive = true;
    currentWordIndex = 0;
    correctCount = 0;
    currentQuizWords = getRandomWords(words, QUIZ_WORD_COUNT);
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    feedback.innerHTML = '';
    results.innerHTML = '';
    // 初始化计数器显示
    wordCounter.textContent = `第 1/${QUIZ_WORD_COUNT} 个单词`;
    showNextWord();
}


// 修改showNextWord函数来更新计数器
function showNextWord() {
    if (currentWordIndex < QUIZ_WORD_COUNT) {
        const currentWord = currentQuizWords[currentWordIndex];
        wordDisplay.textContent = `${currentWord.chinese} ${currentWord.phonetic}`;

        userInput.value = '';
        userInput.focus();
        updateProgress();
        // 更新计数器显示
        wordCounter.textContent = `第 ${currentWordIndex + 1}/${QUIZ_WORD_COUNT} 个单词`;
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

// 修改 checkAnswer 函数
function checkAnswer() {
    const currentWord = currentQuizWords[currentWordIndex];
    const userAnswer = userInput.value.trim().toLowerCase();
    const correctAnswer = currentWord.word.toLowerCase();

    if (userAnswer === correctAnswer) {
        correctCount++;
        feedback.innerHTML = createFeedbackCard(currentWord, true);
    } else {
        feedback.innerHTML = createFeedbackCard(currentWord, false);
    }

    currentWordIndex++;
    
    // 移除之前的setTimeout，改为添加按键监听
    document.addEventListener('keydown', moveToNextWord);
    userInput.removeEventListener('keyup', handleUserInput); // 暂时移除输入框的监听
    userInput.blur(); // 移除输入框焦点
}

// 新增处理按键进入下一个单词的函数
function moveToNextWord(event) {
    document.removeEventListener('keydown', moveToNextWord); // 移除按键监听
    feedback.innerHTML = ''; // 清空单词卡
    
    if (currentWordIndex < QUIZ_WORD_COUNT) {
        showNextWord();
        userInput.addEventListener('keyup', handleUserInput); // 重新添加输入框监听
    } else {
        showResults();
    }
}

// 将原来的keyup事件处理提取为单独的函数
function handleUserInput(event) {
    if (event.key === 'Enter' && isQuizActive) {
        checkAnswer();
    }
}

// 修改初始化事件监听的方式
userInput.addEventListener('keyup', handleUserInput);

// 修改 showResults 函数
function showResults() {
    isQuizActive = false;
    quizContainer.style.display = 'none';
    startButton.style.display = 'block';
    startButton.textContent = '重新开始';
    feedback.innerHTML = ''; // 确保清空单词卡
    
    const percentage = (correctCount / QUIZ_WORD_COUNT) * 100;
    results.innerHTML = `
        <div class="results-container">
            <h2>测试结束</h2>
            <div class="score">
                <div class="score-number">${correctCount}/${QUIZ_WORD_COUNT}</div>
                <div class="score-percentage">${percentage.toFixed(1)}%</div>
            </div>
        </div>
    `;

    // 移除所有相关的事件监听
    document.removeEventListener('keydown', moveToNextWord);
    userInput.removeEventListener('keyup', handleUserInput);
}

// 修改 startQuiz 函数，确保重新开始时正确设置事件监听
function startQuiz() {
    isQuizActive = true;
    currentWordIndex = 0;
    correctCount = 0;
    currentQuizWords = getRandomWords(words, QUIZ_WORD_COUNT);
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    feedback.innerHTML = '';
    results.innerHTML = '';
    wordCounter.textContent = `第 1/${QUIZ_WORD_COUNT} 个单词`;
    userInput.addEventListener('keyup', handleUserInput); // 确保添加输入框监听
    showNextWord();
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
                    <span class="word-chinese">${word.chinese}</span>
                </div>
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
    const percent = (currentWordIndex / QUIZ_WORD_COUNT) * 100;  // 修改计算方式
    progress.style.width = `${percent}%`;
}


function showResults() {
    isQuizActive = false;
    quizContainer.style.display = 'none';
    startButton.style.display = 'block';
    startButton.textContent = '重新开始';
    
    const percentage = (correctCount / QUIZ_WORD_COUNT) * 100;  // 修改计算方式
    results.innerHTML = `
        <div class="results-container">
            <h2>测试结束</h2>
            <div class="score">
                <div class="score-number">${correctCount}/${QUIZ_WORD_COUNT}</div>
                <div class="score-percentage">${percentage.toFixed(1)}%</div>
            </div>
        </div>
    `;
}


