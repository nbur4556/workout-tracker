// Mongoose Database
const mongoose = require('mongoose');
const db = require('../models/database.js');

const WorkoutController = function () { }

// WorkoutController Methods
WorkoutController.prototype.createWorkout = () => {
    // db.Workout.create({
    //     day: Date.now(),
    //     exercises: new Array(),
    //     totalDuration: 1
    // }).then(data => {
    //     console.log(data);
    // }).catch(({ message }) => {
    //     console.log(message);
    // });

    return "Create Workout";
}

WorkoutController.prototype.readWorkout = () => {
    return "Read Workout";
}

WorkoutController.prototype.updateWorkout = () => {
    return "Update Workout";
}

WorkoutController.prototype.deleteWorkout = () => {
    return "Delete Workout";
}

// Testing
const workoutController = new WorkoutController();

console.log(workoutController.createWorkout());
console.log(workoutController.readWorkout());
console.log(workoutController.updateWorkout());
console.log(workoutController.deleteWorkout());

module.exports = WorkoutController;