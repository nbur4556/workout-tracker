const ExerciseController = require('../controllers/exercise-controller.js');
const WorkoutController = require('../controllers/workout-controller.js');

// Controller Objects
const workout = new WorkoutController();
const exercise = new ExerciseController();

// Determines type of exercise and returns exercise object
function createExerciseOfType(body, cb) {
    if (body.type === "resistance") {
        exercise.createResistanceExercise(body, response => {
            cb(response);
        });
    }
    else if (body.type === "cardio") {
        exercise.createCardioExercise(body, response => {
            cb(response);
        });
    }
}

module.exports = app => {
    // getLastWorkout method
    app.get('/api/workouts', (req, res) => {
        workout.readAllWorkouts(response => {
            res.json(response);
        })
    });

    // addExercise method
    app.put('/api/workouts/:id', (req, res) => {
        createExerciseOfType(req.body, exercise => {
            console.log(exercise.type);
            console.log(exercise);
        });
    });

    // createWorkout method
    app.post('/api/workouts', (req, res) => {
        workout.createWorkout(response => {
            res.json(response);
        });
    });

    // getWorkoutsInRange method
    app.get('/api/workouts/range', (req, res) => {
        workout.readAllWorkouts(response => {
            res.json(response);
        });
    });


}