const database = require('../models/database.js');

const WorkoutController = function () { }

// WorkoutController CRUD Methods
WorkoutController.prototype.createWorkout = callback => {
    database.Workout.create({
        day: Date.now(),
        totalDuration: 0
    })
        .then(data => { callback(data) })
        .catch(({ message }) => { callback(message) });
}

WorkoutController.prototype.readAllWorkouts = callback => {
    database.Workout.find({})
        .then(data => {
            // Concatenate Exercises
            data.forEach(workout => {
                workout.exercises = workout.resistanceExercises.concat(workout.cardioExercises);
            })

            callback(data);
        })
        .catch(err => { callback(err) });
}

WorkoutController.prototype.readAllWorkoutsPopulated = callback => {
    database.Workout.find({})
        .populate("resistanceExercises")
        .populate("cardioExercises")
        .then(data => {
            // Concatenate Exercises
            data.forEach(workout => {
                workout.exercises = workout.resistanceExercises.concat(workout.cardioExercises);
            })

            callback(data);
        })
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
    // Get total duration
    database.Workout.findOne({ _id: id })
        .then(({ totalDuration }) => {

            totalDuration += exercise.duration;
            console.log(totalDuration);

            //Update Resistance Array
            if (exercise.type === "resistance") {
                database.Workout.updateOne({ _id: id }, { $push: { resistanceExercises: exercise } }, { new: true })
                    .then(data => {
                        callback(data);
                    })
                    .catch(err => { callback(err) });
            }
            //Update Cardio Array
            else if (exercise.type === "cardio") {
                database.Workout.updateOne({ _id: id }, { $push: { cardioExercises: exercise } }, { new: true })
                    .then(data => {
                        callback(data);
                    })
                    .catch(err => { callback(err) });
            }
        })
        .catch(err => { callback(err) });
}

WorkoutController.prototype.deleteWorkout = (id, callback) => {
    database.Workout.deleteOne({ _id: id })
        .then(data => { callback(data) })
        .catch(({ message }) => { callback(message) });
}

module.exports = WorkoutController;