// 确保DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
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
    let waitingForNext = false;

    // 添加事件监听器
    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', checkAnswer);
    restartButton.addEventListener('click', startQuiz);

    // 获取随机单词的辅助函数
    function getRandomWords(wordsList, count) {
        const shuffled = [...wordsList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // 全局键盘事件监听
    document.addEventListener('keydown', function(e) {
        if (waitingForNext) {
            // 在显示单词卡状态下，按任意键继续
            waitingForNext = false;
            currentWordIndex++;
            if (currentWordIndex < currentQuiz.length) {
                showCurrentWord();
                feedback.innerHTML = '';
                userInput.value = '';
                userInput.focus();
            } else {
                showResults();
            }
        }
    });

    // 输入框键盘事件监听
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !waitingForNext) {
            checkAnswer();
        }
        // 阻止在等待继续状态下的输入
        if (waitingForNext) {
            e.preventDefault();
        }
    });

    // 初始化页面状态
    quizContainer.style.display = 'none';
    results.style.display = 'none';

    // 开始测试函数
    function startQuiz() {
        try {
            if (!Array.isArray(words) || words.length === 0) {
                throw new Error('单词数据未正确加载');
            }

            currentWordIndex = 0;
            correctCount = 0;
            errorCount = 0;
            errorList = [];
            waitingForNext = false;
            
            // 从words数组中随机选择50个单词
            currentQuiz = getRandomWords(words, 50);
            
            startButton.style.display = 'none';
            quizContainer.style.display = 'block';
            results.style.display = 'none';
            feedback.innerHTML = '';
            
            showCurrentWord();
            
            userInput.value = '';
            userInput.focus();
        } catch (error) {
            console.error('启动测验时出错:', error);
            feedback.innerHTML = `<div class="wrong">出错了：${error.message}</div>`;
        }
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
        if (waitingForNext) return;

        const currentWord = currentQuiz[currentWordIndex];
        const userAnswer = userInput.value.trim().toLowerCase();
        
        const wordCard = `
            <div class="word-card">
                <div class="result-status">
                    ${userAnswer === currentWord.english.toLowerCase() 
                        ? '✓ 回答正确！' 
                        : `✗ 正确答案是：${currentWord.english}`}
                </div>
                
                <div class="word-main-info">
                    <div class="word-english">${currentWord.english}</div>
                    <div class="word-phonetic">${currentWord.phonetic || ''}</div>
                    <div class="word-chinese">${currentWord.chinese}</div>
                </div>

                <div class="divider"></div>
                
                ${currentWord.example ? `
                    <div class="word-examples">
                        <div class="example-item">
                            <p>${currentWord.example.sentence}</p>
                            <p style="color: #666;">${currentWord.example.translation}</p>
                        </div>
                    </div>
                ` : ''}
                
                ${currentWord.examples && currentWord.examples.length > 0 ? `
                    <div class="word-examples">
                        ${currentWord.examples.slice(0, 2).map(ex => `
                            <div class="example-item">
                                <p>${ex.sentence}</p>
                                <p style="color: #666;">${ex.translation}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${currentWord.notes ? `
                    <div style="color: #666; font-style: italic; margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 6px;">
                        ${currentWord.notes}
                    </div>
                ` : ''}

                <div class="continue-tip">
                    按任意键继续下一个单词...
                </div>
            </div>
        `;

        if (userAnswer === currentWord.english.toLowerCase()) {
            feedback.innerHTML = `<div class="correct">${wordCard}</div>`;
            correctCount++;
        } else {
            feedback.innerHTML = `<div class="wrong">${wordCard}</div>`;
            errorCount++;
            errorList.push(currentWord);
        }
        
        userInput.value = '';
        waitingForNext = true;
    }

    // 显示结果函数
    function showResults() {
        quizContainer.style.display = 'none';
        results.style.display = 'block';
        
        correctCountElement.textContent = correctCount;
        errorCountElement.textContent = errorCount;
        
        // 清空错误列表
        errorListElement.innerHTML = '';
        
        // 显示错误的单词
        errorList.forEach(word => {
            const errorWordElement = document.createElement('div');
            errorWordElement.className = 'error-word';
            errorWordElement.innerHTML = `
                <div class="word-english">${word.english}</div>
                <div class="word-phonetic">${word.phonetic || ''}</div>
                <div class="word-chinese">${word.chinese}</div>
            `;
            errorListElement.appendChild(errorWordElement);
        });
    }
});
