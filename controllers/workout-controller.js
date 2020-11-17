// Mongoose Database
const mongoose = require('mongoose');
const db = require('./models/database.js');

// db.Workout.create({
//     day: Date.now(),
//     exercises: new Array(),
//     totalDuration: 1
// }).then(data => {
//     console.log(data);
// }).catch(({ message }) => {
//     console.log(message);
// });