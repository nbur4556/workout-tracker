// Mongoose Database
const db = require('../models/database.js');

const WorkoutController = function () { }

// WorkoutController Methods
WorkoutController.prototype.createWorkout = cb => {
    db.Workout.create({
        day: Date.now(),
        exercises: new Array(),
        totalDuration: 1
    })
        .then(data => { cb(data); })
        .catch(({ message }) => { cb(message); });
}

WorkoutController.prototype.readWorkout = () => {
    return "Read Workout";
}

WorkoutController.prototype.updateWorkout = () => {
    return "Update Workout";
}

WorkoutController.prototype.deleteWorkout = (id, cb) => {
    db.Workout.deleteOne({ _id: id })
        .then(data => { cb(data); })
        .catch(({ message }) => { cb(message); });
}

module.exports = WorkoutController;