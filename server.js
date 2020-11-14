const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('/');
});

app.get('/stats', (req, res) => {
    res.send('/stats');
});

app.get('/exercise', (req, res) => {
    res.send('/exercise');
});

app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});