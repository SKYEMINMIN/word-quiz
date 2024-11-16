function checkAnswer() {
    const currentWord = currentQuiz[currentWordIndex];
    const userAnswer = userInput.value.trim().toLowerCase();
    
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
            
            <div class="continue-tip">
                按回车键继续下一个单词...
            </div>
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

// 添加新的全局变量
let waitingForEnter = false;

// 修改键盘事件监听
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
