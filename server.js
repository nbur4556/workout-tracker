const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongoose Database
const mongoose = require('mongoose');
const db = require('./models/database.js');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populate', { useNewUrlParser: true });

// Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Server listen
app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});