const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ResistanceExerciseSchema = new Schema({
    name: String,
    duration: Number,
    reps: Number,
    sets: Number,
    weight: Number,
    type: String
});


// Create Model
const ResistanceExercise = mongoose.model('ResistanceExercise', ResistanceExerciseSchema);

module.exports = ResistanceExercise;