const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', { useNewUrlParser: true }).then((connection) => {
    console.log(connection);
});

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Server listen
app.listen(PORT, () => {
    console.log("\nListening on http://localhost:" + PORT);
});