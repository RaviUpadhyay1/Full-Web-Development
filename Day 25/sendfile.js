const express = require('express');
// const path = require('path');
const app = express();
const port = 3000;

// Serve index.html from templates folder
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'templates', 'index.html'));
    res.sendFile('templates/index.html',{root:__dirname})
});

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
