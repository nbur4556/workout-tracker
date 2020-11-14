const rootPath = module.parent.path;

module.exports = app => {
    // Home Page
    app.get('/', (req, res) => {
        res.sendFile(`${rootPath}\\public\\index.html`);
    });

    // Stats Page
    app.get('/stats', (req, res) => {
        res.sendFile(`${rootPath}\\public\\stats.html`);
    });

    // Exercise Page
    app.get('/exercise', (req, res) => {
        res.sendFile(`${rootPath}\\public\\exercise.html`);
    });
}