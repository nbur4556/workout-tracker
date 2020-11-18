
const database = require('../models/database.js');

const ExerciseController = function () { }

// Cardio Exercise Methods
ExerciseController.prototype.createCardioExercise = (createBody, callback) => {
    database.CardioExercise.create(createBody)
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

ExerciseController.prototype.readCardioExercise = (id, callback) => {
    database.CardioExercise.findOne({ _id: id })
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

ExerciseController.prototype.updateCardioExercise = (id, updateBody, callback) => {
    database.CardioExercise.updateOne({ _id: id }, updateBody)
        .then(data => { callback(data) })
        .catch(err => { callback(err) });

}

ExerciseController.prototype.deleteCardioExercise = (id, callback) => {
    database.CardioExercise.deleteOne({ _id: id })
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

// Resistance Exercise Methods
ExerciseController.prototype.createResistanceExercise = (createBody, callback) => {
    database.ResistanceExercise.create(createBody)
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

ExerciseController.prototype.readResistanceExercise = (id, callback) => {
    database.ResistanceExercise.findOne({ _id: id })
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

ExerciseController.prototype.updateResistanceExercise = (id, updateBody, callback) => {
    database.ResistanceExercise.updateOne({ _id: id }, updateBody)
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

ExerciseController.prototype.deleteResistanceExercise = (id, callback) => {
    database.ResistanceExercise.deleteOne({ _id: id })
        .then(data => { callback(data) })
        .catch(err => { callback(err) });
}

module.exports = ExerciseController