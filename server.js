const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));

// Routes
require('./routes/html-routes.js')(app);

// Server listen
app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});