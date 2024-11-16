// 配置 PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// DOM 元素
const pdfFileInput = document.getElementById('pdf-file');
const extractBtn = document.getElementById('extract-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const extractionStatus = document.getElementById('extraction-status');
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreValue = document.getElementById('score-value');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const resultContainer = document.getElementById('result-container');
const errorCount = document.getElementById('error-count');
const errorWords = document.getElementById('error-words');
const restartBtn = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz-container');

// 全局变量
let words = [];
let currentWords = [];
let currentIndex = 0;
let score = 0;
let incorrectWords = [];

// PDF处理函数
async function extractWordsFromPDF(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        const extractedWords = [];

        // 遍历每一页
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            
            // 提取文本内容
            const pageText = textContent.items.map(item => item.str).join(' ');
            
            // 使用正则表达式匹配单词和其中文释义
            // 这里的正则表达式需要根据PDF的具体格式调整
            const wordPattern = /([a-zA-Z-]+)\s+([\u4e00-\u9fa5]+)/g;
            let match;

            while ((match = wordPattern.exec(pageText)) !== null) {
                extractedWords.push({
                    english: match[C_1]().toLowerCase(),
                    chinese: match[C_2]()
                });
            }
        }

        return extractedWords;
    } catch (error) {
        throw new Error('PDF处理失败: ' + error.message);
    }
}

// 提取按钮点击事件
extractBtn.addEventListener('click', async () => {
    const file = pdfFileInput.files[C_0]();
    if (!file) {
        extractionStatus.textContent = '请选择PDF文件';
        return;
    }

    try {
        loadingSpinner.style.display = 'block';
        extractBtn.disabled = true;
        extractionStatus.textContent = '正在提取单词...';

        words = await extractWordsFromPDF(file);
        
        extractionStatus.textContent = `成功提取 ${words.length} 个单词`;
        initializeQuiz(); // 提取完成后立即开始测验
    } catch (error) {
        extractionStatus.textContent = error.message;
    } finally {
        loadingSpinner.style.display = 'none';
        extractBtn.disabled = false;
    }
});

// 初始化测验
function initializeQuiz() {
    currentWords = [...words]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(50, words.length));
    currentIndex = 0;
    score = 0;
    incorrectWords = [];
    scoreValue.textContent = score;
    updateProgress();
    displayNewWord();
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    userInput.value = '';
    feedback.textContent = '';
}

// 更新进度条
function updateProgress() {
    const progress = (currentIndex / currentWords.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentIndex}/${currentWords.length}`;
}

// 显示新单词
function displayNewWord() {
    if (currentIndex < currentWords.length) {
        wordDisplay.textContent = currentWords[currentIndex].chinese;
        userInput.value = '';
        feedback.textContent = '';
        userInput.focus();
    } else {
        showResults();
    }
}

// 检查答案
function checkAnswer() {
    const userAnswer = userInput.value.toLowerCase().trim();
    const correctAnswer = currentWords[currentIndex].english.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Good!';
        feedback.className = 'feedback correct';
        score++;
        scoreValue.textContent = score;
    } else {
        feedback.textContent = `Incorrect. The answer is: ${correctAnswer}`;
        feedback.className = 'feedback incorrect';
        incorrectWords.push(currentWords[currentIndex]);
    }

    currentIndex++;
    updateProgress();

    setTimeout(() => {
        displayNewWord();
    }, 1500);
}

// 显示结果
function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    errorCount.textContent = incorrectWords.length;
    
    errorWords.innerHTML = incorrectWords
        .map(word => `<div>${word.chinese} - ${word.english}</div>`)
        .join('');
}

// 事件监听器
submitBtn.addEventListener('click', checkAnswer);
userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
restartBtn.addEventListener('click', initializeQuiz);

// 默认加载一些示例单词
words = [
    { english: 'apple', chinese: '苹果' },
    { english: 'banana', chinese: '香蕉' },
    // ... 其他示例单词
];
initializeQuiz();
