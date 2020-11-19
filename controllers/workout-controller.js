const { Workout } = require('../models/database.js');
const database = require('../models/database.js');

const WorkoutController = function () { }

// WorkoutController CRUD Methods
WorkoutController.prototype.createWorkout = callback => {
    database.Workout.create({
        day: Date.now(),
        exercises: new Array(),
        totalDuration: 0
    })
        .then(data => { callback(data) })
        .catch(({ message }) => { callback(message) });
}

WorkoutController.prototype.readAllWorkouts = callback => {
    database.Workout.find({})
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

WorkoutController.prototype.readAllWorkoutsPopulate = callback => {
    database.Workout.find({})
        .populate("exercises")
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

WorkoutController.prototype.readWorkout = (id, callback) => {
    database.Workout.findOne({ _id: id })
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

WorkoutController.prototype.updateWorkout = (id, updateBody, callback) => {
    database.Workout.updateOne({ _id: id }, updateBody)
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

WorkoutController.prototype.insertExercise = (id, exercise, callback) => {
    database.Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: exercise } }, { new: true })
        .then(data => {
            callback(data);
        })
        .catch(err => { callback(err) });
}

WorkoutController.prototype.deleteWorkout = (id, callback) => {
    database.Workout.deleteOne({ _id: id })
        .then(data => { callback(data) })
        .catch(({ message }) => { callback(message) });
}

module.exports = WorkoutController;