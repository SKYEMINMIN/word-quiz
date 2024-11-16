function checkAnswer() {
    const currentWord = currentQuiz[currentWordIndex];
    const userAnswer = userInput.value.trim().toLowerCase();
    
    // 创建详细的单词卡片 HTML
    const wordCard = `
        <div class="word-card">
            <h3>单词详细信息</h3>
            <div class="word-basic">
                <p><strong>英文:</strong> ${currentWord.english}</p>
                <p><strong>中文:</strong> ${currentWord.chinese}</p>
                <p><strong>音标:</strong> ${currentWord.phonetic}</p>
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
