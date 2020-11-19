const ExerciseController = require('../controllers/exercise-controller.js');
const WorkoutController = require('../controllers/workout-controller.js');

// TEST DATA
const testWorkouts = new Array();

const workout = new WorkoutController();
const exercise = new ExerciseController();

module.exports = app => {
    // getLastWorkout method
    app.get('/api/workouts', (req, res) => {
        workout.readAllWorkouts(response => {
            res.json(response);
        })
    });

    // addExercise method
    app.put('/api/workouts/:id', (req, res) => {
        let workoutId = req.params.id;
        testWorkouts[workoutId].exercises.push(req.body);

        // Update duration
        testWorkouts[workoutId].totalDuration += req.body.duration;

        res.json(req.body);
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
        })
    });


}