const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardioExerciseSchema = new Schema({
    name: String,
    duration: Number,
    distance: Number,
    type: String
});

const CardioExercise = mongoose.model("CardioExercise", CardioExerciseSchema);

module.exports = CardioExercise;