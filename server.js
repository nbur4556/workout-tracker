const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', { useNewUrlParser: true }).then((connection) => {
    // console.log(connection);
});

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Server listen
app.listen(PORT, () => {
    console.log("\nListening on http://localhost:" + PORT);
});

// Testing Controllers
// const WorkoutController = require('./controllers/workout-controller.js');
// const ExerciseController = require('./controllers/exercise-controller.js');

// const workoutController = new WorkoutController();
// const exerciseController = new ExerciseController();

// EXERCISE CONTROLLER

// exerciseController.createCardioExercise({
//     name: "Test",
//     duration: 5,
//     distance: 10,
//     type: "Cardio"
// }, response => {
//     console.log(response);
// });

// exerciseController.createResistanceExercise({
//     name: "Test",
//     duration: 12,
//     reps: 6,
//     sets: 16,
//     weight: 42,
//     type: "Resistance"
// }, response => {
//     console.log(response);
// });

// exerciseController.readCardioExercise("5fb5a71fdd1d901bd0d3bc93", response => {
//     console.log(response);
// });

// exerciseController.readResistanceExercise("5fb5a71fdd1d901bd0d3bc94", response => {
//     console.log(response);
// });

// exerciseController.updateCardioExercise("5fb5a71fdd1d901bd0d3bc93", {
//     name: "New Test",
//     duration: 15,
//     distance: 66
// }, response => {
//     console.log(response);
// });

// exerciseController.updateResistanceExercise("5fb5a71fdd1d901bd0d3bc94", {
//     name: "New Test",
//     duration: 15,
//     reps: 999
// }, response => {
//     console.log(response);
// });

// exerciseController.deleteCardioExercise("5fb5a71fdd1d901bd0d3bc93", response => {
//     console.log(response);
// });

// exerciseController.deleteResistanceExercise("5fb5a71fdd1d901bd0d3bc94", response => {
//     console.log(response);
// });

// WORKOUT CONTROLLER

// workoutController.createWorkout(response => {
//     console.log(response);
// });

// workoutController.readWorkout("5fb585271e46d22ed07503d8", response => {
//     console.log(response);
// });

// workoutController.updateWorkout("5fb585271e46d22ed07503d8", {
//     day: Date.now(),
//     totalDuration: 7,
// }, response => {
//     console.log(response);
// });

// workoutController.addToExercises("5fb585271e46d22ed07503d8", "test", response => {
//     console.log(response);
// });

// workoutController.deleteWorkout("5fb585271e46d22ed07503d8", response => {
//     console.log(response);
// });