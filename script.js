document.addEventListener('DOMContentLoaded', function() {
    // DOM 元素
    const startButton = document.getElementById('start-quiz');
    const quizContainer = document.getElementById('quiz-container');
    const wordDisplay = document.getElementById('word-display');
    const userInput = document.getElementById('user-input');
    const feedback = document.getElementById('feedback');
    const progress = document.getElementById('progress');
    const results = document.getElementById('results');

    // 状态变量
    let currentQuiz = [];
    let currentWordIndex = 0;
    let correctCount = 0;
    let errorCount = 0;
    let errorList = [];
    let waitingForNext = false;

    // 初始化页面
    function initializeApp() {
        quizContainer.style.display = 'none';
        results.style.display = 'none';
        startButton.style.display = 'block';
    }

    // 开始测验
    function startQuiz() {
        if (!window.words || !window.words.length) {
            alert('单词数据加载失败！');
            return;
        }

        // 随机选择50个单词
        currentQuiz = [...window.words]
            .sort(() => Math.random() - 0.5)
            .slice(0, 50);
        
        // 重置状态
        currentWordIndex = 0;
        correctCount = 0;
        errorCount = 0;
        errorList = [];
        waitingForNext = false;
        
        // 更新界面
        startButton.style.display = 'none';
        quizContainer.style.display = 'block';
        results.style.display = 'none';
        feedback.innerHTML = '';
        
        showCurrentWord();
    }

    // 显示当前单词
    function showCurrentWord() {
        const currentWord = currentQuiz[currentWordIndex];
        progress.textContent = `${currentWordIndex + 1} / 50`;
        
        wordDisplay.innerHTML = `
            <div class="word-info">
                <div class="chinese">${currentWord.chinese}</div>
                <div class="phonetic">${currentWord.phonetic || ''}</div>
            </div>
        `;
        
        userInput.value = '';
        userInput.focus();
    }

    // 检查答案
    function checkAnswer() {
        if (waitingForNext) return;

        const currentWord = currentQuiz[currentWordIndex];
        const userAnswer = userInput.value.trim().toLowerCase();
        const correctAnswer = currentWord.english.toLowerCase();
        const isCorrect = userAnswer === correctAnswer;

        if (!isCorrect) {
            errorList.push(currentWord);
            errorCount++;
        } else {
            correctCount++;
        }

        showWordCard(currentWord, isCorrect, userAnswer);
        waitingForNext = true;
    }

    // 显示单词卡
    function showWordCard(word, isCorrect, userAnswer) {
        feedback.innerHTML = `
            <div class="word-card ${isCorrect ? 'correct' : 'wrong'}">
                <div class="result-header">
                    ${isCorrect ? '✓ 太棒了！' : '✗ 继续加油！'}
                </div>
                <div class="word-content">
                    <div class="english">${word.english}</div>
                    <div class="phonetic">${word.phonetic || ''}</div>
                    <div class="pos">${word.pos || ''}</div>
                    <div class="chinese">${word.chinese}</div>
                    ${word.example ? `
                        <div class="example">
                            <div class="english">${word.example.english}</div>
                            <div class="chinese">${word.example.chinese}</div>
                        </div>
                    ` : ''}
                </div>
                <div class="next-tip">按任意键继续...</div>
            </div>
        `;
    }

    // 显示最终结果
    function showResults() {
        quizContainer.style.display = 'none';
        results.style.display = 'block';
        startButton.style.display = 'block';

        const accuracy = ((correctCount / 50) * 100).toFixed(1);
        
        results.innerHTML = `
            <h2>测试结果</h2>
            <div class="result-summary">
                <div class="result-item">
                    <div class="result-label">正确</div>
                    <div class="result-value">${correctCount}</div>
                </div>
                <div class="result-item">
                    <div class="result-label">错误</div>
                    <div class="result-value">${errorCount}</div>
                </div>
                <div class="result-item">
                    <div class="result-label">正确率</div>
                    <div class="result-value">${accuracy}%</div>
                </div>
            </div>
            ${errorList.length > 0 ? `
                <h3>需要复习的单词</h3>
                <div class="error-list">
                    ${errorList.map(word => `
                        <div class="error-word">
                            <div class="english">${word.english}</div>
                            <div class="phonetic">${word.phonetic || ''}</div>
                            <div class="pos">${word.pos || ''}</div>
                            <div class="chinese">${word.chinese}</div>
                            ${word.example ? `
                                <div class="example">
                                    <div class="english">${word.example.english}</div>
                                    <div class="chinese">${word.example.chinese}</div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        `;
    }

    // 处理下一题
    function handleNext() {
        if (!waitingForNext) return;
        
        waitingForNext = false;
        currentWordIndex++;
        
        if (currentWordIndex < currentQuiz.length) {
            showCurrentWord();
            feedback.innerHTML = '';
        } else {
            showResults();
        }
    }

    // 事件监听器
    startButton.addEventListener('click', startQuiz);

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !waitingForNext) {
            checkAnswer();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (waitingForNext) {
            handleNext();
        }
    });

    // 初始化应用
    initializeApp();
});
