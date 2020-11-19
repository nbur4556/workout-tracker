const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const WorkoutSchema = new Schema({
    day: Date,
    exercises: new Array(),
    resistanceExercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "ResistanceExercise"
        }
    ],
    cardioExercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "CardioExercise"
        }
    ],
    totalDuration: Number
});

// Create Model
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;