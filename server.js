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
const WorkoutController = require('./controllers/workout-controller.js');
const ExerciseController = require('./controllers/exercise-controller.js');

const workoutController = new WorkoutController();
const exerciseController = new ExerciseController();

// workoutController.createWorkout(response => {
//     console.log(response);
// });

// workoutController.updateWorkout({
//     id: "5fb585271e46d22ed07503d8",
//     day: Date.now,
//     totalDuration: 7
// }, response => {
//     console.log(response);
// });

// workoutController.updateWorkoutDay("5fb585271e46d22ed07503d8", Date.now(), response => {
//     console.log(response);
// });

// workoutController.deleteWorkout("5fb5862575cc3136a0fa9c13", response => {
//     console.log(response);
// });