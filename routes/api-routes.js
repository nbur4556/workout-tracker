// TEST DATA
const testWorkouts = new Array();

module.exports = app => {
    // getLastWorkout method
    app.get('/api/workouts', (req, res) => {
        res.json(testWorkouts);
    });

    // addExercise method
    app.put('/api/workouts/:id', (req, res) => {
        let workoutId = req.params.id;
        testWorkouts[workoutId].workouts.push(req.body);

        res.json(req.body);
    });

    // createWorkout method
    app.post('/api/workouts', (req, res) => {
        let workoutId = testWorkouts.length;
        testWorkouts.push(req.body);
        testWorkouts[workoutId]._id = workoutId;
        testWorkouts[workoutId].workouts = new Array();

        res.json(testWorkouts[workoutId]);
    });

    // getWorkoutsInRange method
    app.get('/api/workouts/range', (req, res) => {
        res.json(testWorkouts);
    });


}