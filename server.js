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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', { useNewUrlParser: true });

// db.CardioExercise.create({
//     name: "Test",
//     duration: 1,
//     distance: 2,
//     type: "Cardio"
// }).then(data => {
//     console.log(data);
// }).catch(({ message }) => {
//     console.log(message);
// });

// db.ResistanceExercise.create({
//     name: "Test",
//     duration: 1,
//     reps: 2,
//     sets: 3,
//     weight: 4,
//     type: "Resistance"
// }).then(data => {
//     console.log(data);
// }).catch(({ message }) => {
//     console.log(message);
// });

// db.Workout.create({
//     day: Date.now(),
//     exercises: new Array(),
//     totalDuration: 1
// }).then(data => {
//     console.log(data);
// }).catch(({ message }) => {
//     console.log(message);
// });

// Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Server listen
app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});