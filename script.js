// 获取 DOM 元素
const startButton = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const progress = document.getElementById('progress');
const results = document.getElementById('results');
const correctCountElement = document.getElementById('correct-count');
const errorCountElement = document.getElementById('error-count');
const errorListElement = document.getElementById('error-list');
const restartButton = document.getElementById('restart-btn');

// 初始化变量
let currentQuiz = [];
let currentWordIndex = 0;
let correctCount = 0;
let errorCount = 0;
let errorList = [];

// 开始测验
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', startQuiz);

// 添加键盘事件监听
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// 开始测验函数
function startQuiz() {
    // 重置所有状态
    currentWordIndex = 0;
    correctCount = 0;
    errorCount = 0;
    errorList = [];
    
    // 获取随机单词
    currentQuiz = wordsModule.getRandomWords(10); // 这里设置测试单词数量
    
    // 更新 UI
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    results.style.display = 'none';
    feedback.textContent = '';
    
    // 显示第一个单词
    showCurrentWord();
    
    // 聚焦输入框
    userInput.value = '';
    userInput.focus();
}

// 显示当前单词
function showCurrentWord() {
    const currentWord = currentQuiz[currentWordIndex];
    progress.textContent = `${currentWordIndex + 1}/${currentQuiz.length}`;
    
    wordDisplay.innerHTML = `
        <div class="word-info">
            <div class="chinese">${currentWord.chinese}</div>
            <div class="phonetic">${currentWord.phonetic}</div>
        </div>
    `;
}

// 检查答案
function checkAnswer() {
    const currentWord = currentQuiz[currentWordIndex];
    const userAnswer = userInput.value.trim().toLowerCase();
    
    // 创建详细的单词卡片 HTML
    const wordCard = `
        <div class="word-card">
            <h3>=== 单词测试卡 ===</h3>
            <div class="word-basic">
                <p>英文: ${currentWord.english}</p>
                <p>中文: ${currentWord.chinese}</p>
                <p>音标: ${currentWord.phonetic}</p>
                <p>词性: ${currentWord.partOfSpeech || 'N/A'}</p>
                <p>难度: ${currentWord.difficulty || 'N/A'}</p>
                <p>使用频率: ${currentWord.frequency || 'N/A'}</p>
            </div>

            ${currentWord.example ? `
                <div class="word-example">
                    <h4>--- 例句 ---</h4>
                    <p>例句: ${currentWord.example.sentence}</p>
                    <p>翻译: ${currentWord.example.translation}</p>
                    ${currentWord.example.situation ? `<p>场景: ${currentWord.example.situation}</p>` : ''}
                </div>
            ` : ''}

            ${currentWord.examples ? `
                <div class="word-extra-examples">
                    <h4>--- 补充例句 ---</h4>
                    ${currentWord.examples.map(ex => `
                        <p>例句: ${ex.sentence}</p>
                        <p>翻译: ${ex.translation}</p>
                    `).join('')}
                </div>
            ` : ''}

            ${(currentWord.synonyms || currentWord.root || currentWord.related) ? `
                <div class="word-related">
                    <h4>--- 相关词 ---</h4>
                    ${currentWord.synonyms ? `<p>同义词: ${currentWord.synonyms.join(', ')}</p>` : ''}
                    ${currentWord.root ? `<p>词根: ${currentWord.root}</p>` : ''}
                    ${currentWord.related ? `<p>相关词: ${currentWord.related.join(', ')}</p>` : ''}
                </div>
            ` : ''}

            ${currentWord.notes ? `
                <div class="word-notes">
                    <p>注释: ${currentWord.notes}</p>
                </div>
            ` : ''}
        </div>
    `;

    if (userAnswer === currentWord.english.toLowerCase()) {
        feedback.innerHTML = `
            <div class="correct">
                <p>正确！</p>
                ${wordCard}
            </div>
        `;
        correctCount++;
    } else {
        feedback.innerHTML = `
            <div class="wrong">
                <p>错误！正确答案是: ${currentWord.english}</p>
                ${wordCard}
            </div>
        `;
        errorCount++;
        errorList.push(currentWord);
    }
    
    // 清空输入框并聚焦
    userInput.value = '';
    userInput.focus();
    
    // 延迟后进入下一题
    setTimeout(() => {
        currentWordIndex++;
        if (currentWordIndex < currentQuiz.length) {
            showCurrentWord();
            feedback.textContent = '';
        } else {
            showResults();
        }
    }, 3000);
}

// 显示结果
function showResults() {
    quizContainer.style.display = 'none';
    results.style.display = 'block';
    startButton.style.display = 'block';
    startButton.textContent = '重新开始';
    
    correctCountElement.textContent = correctCount;
    errorCountElement.textContent = errorCount;
    
    // 显示错误单词列表
    errorListElement.innerHTML = errorList.map(word => `
        <div class="error-word">
            <p>英文: ${word.english}</p>
            <p>中文: ${word.chinese}</p>
            <p>音标: ${word.phonetic}</p>
        </div>
    `).join('');
}

// 初始化页面状态
quizContainer.style.display = 'none';
results.style.display = 'none';
