// TEST DATA
const testWorkouts = new Array();

module.exports = app => {
    // getLastWorkout method
    app.get('/api/workouts', (req, res) => {
        res.json(testWorkouts);
    });

    // addExercise method
    app.put('/api/workouts/:id', (req, res) => {
        console.log(req.body);
        testWorkouts[0].workout = new Array();
        testWorkouts[0].workout.push(req.body);
        console.log(testWorkouts);

        res.json(testWorkouts);
    });

    // createWorkout method
    app.post('/api/workouts', (req, res) => {
        testWorkouts.push(req.body);

        res.json(testWorkouts);
    });

    // getWorkoutsInRange method


}