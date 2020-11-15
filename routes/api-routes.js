// TEST DATA
const testWorkouts = new Array();

module.exports = app => {
    // getLastWorkout method
    app.get('/api/workouts', (req, res) => {
        res.json(testWorkouts);
    });

    // addExercise method
    app.put('/api/workouts/:id', (req, res) => {
        testWorkouts[0].workout = new Array();
        testWorkouts[0].workout.push(req.body);

        res.json(testWorkouts);
    });

    // createWorkout method
    app.post('/api/workouts', (req, res) => {
        let workoutId = testWorkouts.length;
        console.log(workoutId);

        testWorkouts.push(req.body);
        testWorkouts[workoutId].id = workoutId;

        console.log(testWorkouts[workoutId]);

        res.json(testWorkouts);
    });

    // getWorkoutsInRange method


}