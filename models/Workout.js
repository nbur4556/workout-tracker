const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const WorkoutSchema = new Schema({
    day: Date,
    exercises: Array,
    totalDuration: Number
});

// Create Model
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;