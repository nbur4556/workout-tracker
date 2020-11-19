const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const WorkoutSchema = new Schema({
    day: Date,
    resistanceExercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "ResistanceExercises"
        }
    ],
    cardioExercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "CardioExercises"
        }
    ],
    totalDuration: Number
});

// Create Model
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;