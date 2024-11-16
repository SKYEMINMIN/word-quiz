// 确保在 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    let currentQuiz = [];
    let currentWordIndex = 0;
    let correctCount = 0;
    let errorCount = 0;
    let errorList = [];

    // DOM 元素
    const startButton = document.getElementById('start-quiz');
    const quizContainer = document.getElementById('quiz-container');
    const wordDisplay = document.getElementById('word-display');
    const userInput = document.getElementById('user-input');
    const submitButton = document.getElementById('submit-btn');
    const feedback = document.getElementById('feedback');
    const results = document.getElementById('results');
    const progressSpan = document.getElementById('progress');
    const restartButton = document.getElementById('restart-btn');

    // 开始测验
    startButton.addEventListener('click', startQuiz);

    // 提交答案
    submitButton.addEventListener('click', checkAnswer);

    // 重新开始
    restartButton.addEventListener('click', () => {
        results.style.display = 'none';
        startQuiz();
    });

    // 回车提交
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    function startQuiz() {
        // 重置所有计数器
        currentWordIndex = 0;
        correctCount = 0;
        errorCount = 0;
        errorList = [];
        
        // 获取随机单词
        currentQuiz = wordsModule.getRandomWords(50);
        
        // 显示第一个单词
        showCurrentWord();
        
        // 显示界面元素
        quizContainer.style.display = 'block';
        startButton.style.display = 'none';
        results.style.display = 'none';
        userInput.value = '';
        userInput.focus();
    }

    function showCurrentWord() {
        const word = currentQuiz[currentWordIndex];
        wordDisplay.innerHTML = `
            <div class="word-info">
                <p class="chinese">${word.chinese}</p>
                <p class="phonetic">${word.phonetic}</p>
            </div>
        `;
        progressSpan.textContent = `${currentWordIndex + 1}/${currentQuiz.length}`;
    }

    function checkAnswer() {
        const currentWord = currentQuiz[currentWordIndex];
        const userAnswer = userInput.value.trim().toLowerCase();
        
        if (userAnswer === currentWord.english.toLowerCase()) {
            // 答对了
            feedback.textContent = '正确！';
            feedback.className = 'correct';
            correctCount++;
        } else {
            // 答错了
            feedback.textContent = `错误！正确答案是: ${currentWord.english}`;
            feedback.className = 'wrong';
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
        }, 1500);
    }

    function showResults() {
        quizContainer.style.display = 'none';
        results.style.display = 'block';
        startButton.style.display = 'block';
        
        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('error-count').textContent = errorCount;
        
        // 显示错误列表
        const errorListDiv = document.getElementById('error-list');
        errorListDiv.innerHTML = '<h3>错误单词列表：</h3>';
        errorList.forEach(word => {
            errorListDiv.innerHTML += `
                <div class="error-word">
                    <p>${word.english} - ${word.chinese}</p>
                    <p class="phonetic">${word.phonetic}</p>
                </div>
            `;
        });
    }
});
