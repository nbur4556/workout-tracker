// Mongoose Database
const mongoose = require('mongoose');
const db = require('../models/database.js');

const ExerciseController = function () { }

// Cardio Exercise Methods
ExerciseController.prototype.createCardioExercise = () => {
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

    return "Create Cardio Exercise";
}

ExerciseController.prototype.readCardioExercise = () => {
    return "Read Cardio Exercise";
}

ExerciseController.prototype.updateCardioExercise = () => {
    return "Update Cardio Exercise";

}

ExerciseController.prototype.deleteCardioExercise = () => {
    return "Delete Cardio Exercise";
}

// Resistance Exercise Methods
ExerciseController.prototype.createResistanceExercise = () => {
    return "Create Resistance Exercise"
}

ExerciseController.prototype.readResistanceExercise = () => {
    return "Read Resistance Exercise"
}

ExerciseController.prototype.updateResistanceExercise = () => {
    return "Update Resistance Exercise"
}

ExerciseController.prototype.deleteResistanceExercise = () => {
    return "Delete Resistance Exercise"
}

module.exports = ExerciseController

// Testing
const exerciseController = new ExerciseController();

console.log(exerciseController.createCardioExercise());
console.log(exerciseController.readCardioExercise());
console.log(exerciseController.updateCardioExercise());
console.log(exerciseController.deleteCardioExercise());
console.log(exerciseController.createResistanceExercise());
console.log(exerciseController.readResistanceExercise());
console.log(exerciseController.updateResistanceExercise());
console.log(exerciseController.deleteResistanceExercise());