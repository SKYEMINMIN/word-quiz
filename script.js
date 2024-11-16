// PDF.js 的 workerSrc 配置
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// 获取新添加的DOM元素
const pdfFileInput = document.getElementById('pdf-file');
const extractBtn = document.getElementById('extract-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const fileError = document.getElementById('file-error');
const extractedWordsContainer = document.getElementById('extracted-words');
const wordsList = document.getElementById('words-list');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizSection = document.getElementById('quiz-section');

// 原有的DOM元素和变量保持不变...

// 新增的PDF处理函数
async function processPDFFile(file) {
    try {
        if (!file.type.includes('pdf')) {
            throw new Error('Please select a PDF file');
        }

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        const wordSet = new Set();
        
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const text = textContent.items.map(item => item.str).join(' ');
            
            // 简单的单词提取逻辑（可以根据需要修改）
            const words = text.match(/[a-zA-Z]+/g) || [];
            words.forEach(word => {
                if (word.length > 1) { // 排除单个字母
                    wordSet.add(word.toLowerCase());
                }
            });
        }

        return Array.from(wordSet);
    } catch (error) {
        throw new Error('Failed to process PDF: ' + error.message);
    }
}

// 显示提取的单词
function displayExtractedWords(words) {
    wordsList.innerHTML = words
        .map(word => `<div>${word}</div>`)
        .join('');
    extractedWordsContainer.style.display = 'block';
}

// 使用提取的单词开始测验
function startQuizWithWords(extractedWords) {
    // 将提取的单词转换为测验格式
    words = extractedWords.map(word => ({
        english: word,
        chinese: word // 这里需要添加翻译功能
    }));
    
    quizSection.style.display = 'block';
    extractedWordsContainer.style.display = 'none';
    initializeQuiz();
}

// 事件监听器
extractBtn.addEventListener('click', async () => {
    const file = pdfFileInput.files[C_0]();
    if (!file) {
        fileError.textContent = 'Please select a file';
        return;
    }

    try {
        fileError.textContent = '';
        loadingSpinner.style.display = 'block';
        extractBtn.disabled = true;

        const extractedWords = await processPDFFile(file);
        displayExtractedWords(extractedWords);
    } catch (error) {
        fileError.textContent = error.message;
    } finally {
        loadingSpinner.style.display = 'none';
        extractBtn.disabled = false;
    }
});

startQuizBtn.addEventListener('click', () => {
    const extractedWords = Array.from(wordsList.children).map(div => div.textContent);
    startQuizWithWords(extractedWords);
});

// 原有的代码保持不变...
