// script.js
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
                    userInput.value = '';
                    userInput.focus();
                } else {
                    showResults();
                }
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
        waitingForEnter = false;
        
        // 获取随机单词
        currentQuiz = wordsModule.getRandomWords(10); // 确保这个函数在 words.js 中定义
        
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
        progress.textContent = `进度：${currentWordIndex + 1}/${currentQuiz.length}`;
        
        wordDisplay.innerHTML = `
            <div class="word-info">
                <div class="chinese">${currentWord.chinese}</div>
                <div class="phonetic">${currentWord.phonetic || ''}</div>
            </div>
        `;
    }

    // 检查答案函数
    function checkAnswer() {
        const currentWord = currentQuiz[currentWordIndex];
        const userAnswer = userInput.value.trim().toLowerCase();
        
        const wordCard = `
            <div class="word-card">
                <h3>单词详细信息</h3>
                <div class="word-basic">
                    <p><strong>英文:</strong> ${currentWord.english}</p>
                    <p><strong>中文:</strong> ${currentWord.chinese}</p>
                    <p><strong>音标:</strong> ${currentWord.phonetic || 'N/A'}</p>
                    ${currentWord.partOfSpeech ? `<p><strong>词性:</strong> ${currentWord.partOfSpeech}</p>` : ''}
                    ${currentWord.level ? `<p><strong>级别:</strong> ${currentWord.level}</p>` : ''}
                    ${currentWord.frequency ? `<p><strong>使用频率:</strong> ${currentWord.frequency}</p>` : ''}
                </div>

                ${currentWord.definition ? `
                    <div class="word-definition">
                        <h4>详细释义</h4>
                        <p>${currentWord.definition}</p>
                    </div>
                ` : ''}

                ${currentWord.example ? `
                    <div class="word-example">
                        <h4>例句</h4>
                        <p><strong>例句:</strong> ${currentWord.example.sentence}</p>
                        <p><strong>翻译:</strong> ${currentWord.example.translation}</p>
                        ${currentWord.example.note ? `<p><strong>注释:</strong> ${currentWord.example.note}</p>` : ''}
                    </div>
                ` : ''}

                ${currentWord.examples && currentWord.examples.length > 0 ? `
                    <div class="word-extra-examples">
                        <h4>补充例句</h4>
                        ${currentWord.examples.map((ex, index) => `
                            <div class="example-item">
                                <p><strong>例句 ${index + 1}:</strong> ${ex.sentence}</p>
                                <p><strong>翻译:</strong> ${ex.translation}</p>
                                ${ex.note ? `<p><strong>注释:</strong> ${ex.note}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${currentWord.synonyms || currentWord.antonyms ? `
                    <div class="word-related">
                        <h4>相关词汇</h4>
                        ${currentWord.synonyms ? `<p><strong>同义词:</strong> ${currentWord.synonyms.join(', ')}</p>` : ''}
                        ${currentWord.antonyms ? `<p><strong>反义词:</strong> ${currentWord.antonyms.join(', ')}</p>` : ''}
                    </div>
                ` : ''}

                ${currentWord.root ? `
                    <div class="word-etymology">
                        <h4>词源信息</h4>
                        <p><strong>词根:</strong> ${currentWord.root}</p>
                        ${currentWord.rootMeaning ? `<p><strong>词根含义:</strong> ${currentWord.rootMeaning}</p>` : ''}
                    </div>
                ` : ''}

                ${currentWord.notes ? `
                    <div class="word-notes">
                        <h4>补充说明</h4>
                        <p>${currentWord.notes}</p>
                    </div>
                ` : ''}

                <div class="continue-tip">
                    按回车键继续下一个单词...
                </div>
            </div>
        `;

        if (userAnswer === currentWord.english.toLowerCase()) {
            feedback.innerHTML = `
                <div class="correct">
                    <p>正确！✓</p>
                    ${wordCard}
                </div>
            `;
            correctCount++;
        } else {
            feedback.innerHTML = `
                <div class="wrong">
                    <p>错误！✗ 正确答案是: ${currentWord.english}</p>
                    ${wordCard}
                </div>
            `;
            errorCount++;
            errorList.push(currentWord);
        }
        
        userInput.value = '';
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
                <p><strong>英文:</strong> ${word.english}</p>
                <p><strong>中文:</strong> ${word.chinese}</p>
                <p><strong>音标:</strong> ${word.phonetic || 'N/A'}</p>
            </div>
        `).join('');
    }
});
