// 等待 DOM 完全加载后再执行脚本
document.addEventListener('DOMContentLoaded', function() {
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
    let waitingForEnter = false;

    // 添加事件监听器
    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', checkAnswer);
    restartButton.addEventListener('click', startQuiz);

    // 添加键盘事件监听
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (waitingForEnter) {
                // 如果正在等待回车继续
                waitingForEnter = false;
                currentWordIndex++;
                if (currentWordIndex < currentQuiz.length) {
                    showCurrentWord();
                    feedback.textContent = '';
                } else {
                    showResults();
                }
                userInput.focus();
            } else {
                // 正常检查答案
                checkAnswer();
            }
        }
    });

    // 初始化页面状态
    quizContainer.style.display = 'none';
    results.style.display = 'none';

    // 开始测验函数
    function startQuiz() {
        // 重置所有状态
        currentWordIndex = 0;
        correctCount = 0;
        errorCount = 0;
        errorList = [];
        
        // 获取随机单词
        currentQuiz = wordsModule.getRandomWords(10);
        
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

    // 检查答案函数
    function checkAnswer() {
        const currentWord = currentQuiz[currentWordIndex];
        const userAnswer = userInput.value.trim().toLowerCase();
        
        const wordCard = `
            <div class="word-card">
                <!-- ... (保持原有的 wordCard HTML 内容不变) ... -->
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
        
        // 清空输入框
        userInput.value = '';
        
        // 设置标志表示等待按回车继续
        waitingForEnter = true;
    }

    // 显示结果函数
    function showResults() {
        quizContainer.style.display = 'none';
        results.style.display = 'block';
        startButton.style.display = 'block';
        startButton.textContent = '重新开始';
        
        correctCountElement.textContent = correctCount;
        errorCountElement.textContent = errorCount;
        
        errorListElement.innerHTML = errorList.map(word => `
            <div class="error-word">
                <p>英文: ${word.english}</p>
                <p>中文: ${word.chinese}</p>
                <p>音标: ${word.phonetic}</p>
            </div>
        `).join('');
    }
});
