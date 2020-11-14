const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}\\public\\index.html`);
});

app.get('/stats', (req, res) => {
    res.sendFile(`${__dirname}\\public\\stats.html`);
});

app.get('/exercise', (req, res) => {
    res.sendFile(`${__dirname}\\public\\exercise.html`);
});

// Server listen
app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});