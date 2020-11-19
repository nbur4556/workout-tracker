module.exports = (app, __root) => {
    // Home Page
    app.get('/', (req, res) => {
        res.sendFile(`${__root}\\public\\index.html`);
    });

    // Stats Page
    app.get('/stats', (req, res) => {
        res.sendFile(`${__root}\\public\\stats.html`);
    });

    // Exercise Page
    app.get('/exercise', (req, res) => {
        res.sendFile(`${__root}/exercise.html`);
    });
}