<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>英语单词测验</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>英语单词测验</h1>
        <div class="controls">
            <button id="start-quiz">开始测验</button>
            <span id="progress">0/50</span>
        </div>
        
        <div id="quiz-container" style="display: none;">
            <div id="word-display"></div>
            <input type="text" id="user-input" placeholder="请输入英文单词">
            <button id="submit-btn">提交</button>
            <div id="feedback"></div>
        </div>
        
        <div id="results" style="display: none;">
            <h2>测验结果</h2>
            <p>正确: <span id="correct-count">0</span></p>
            <p>错误: <span id="error-count">0</span></p>
            <div id="error-list"></div>
            <button id="restart-btn">重新开始</button>
        </div>
    </div>
    <script src="words.js"></script>
    <script src="script.js"></script>
</body>
</html>
