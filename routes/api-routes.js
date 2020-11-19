const ExerciseController = require('../controllers/exercise-controller.js');
const WorkoutController = require('../controllers/workout-controller.js');

// Controller Objects
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

        console.log(req.body.type);

        if (req.body.type === "resistance") {
            console.log("VIVA LA");
        }
        else if (req.body.type === "cardio") {
            console.log("CARDI B");
        }

        // let workoutId = req.params.id;
        // testWorkouts[workoutId].exercises.push(req.body);

        // // Update duration
        // testWorkouts[workoutId].totalDuration += req.body.duration;

        // res.json(req.body);
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