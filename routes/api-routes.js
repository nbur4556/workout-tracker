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

        console.log(workoutId);

        if (workoutId == "undefined") {
            console.log("USE LENGTH");
            workoutId = testWorkouts.length - 1;
        }

        console.log(workoutId);

        testWorkouts[workoutId].workouts.push(req.body);

        console.log(testWorkouts[workoutId]);

        res.json(testWorkouts);
    });

    // createWorkout method
    app.post('/api/workouts', (req, res) => {
        let workoutId = testWorkouts.length;
        testWorkouts.push(req.body);
        testWorkouts[workoutId]._id = workoutId;
        testWorkouts[workoutId].workouts = new Array();

        console.log(testWorkouts);

        res.json(testWorkouts);
    });

    // getWorkoutsInRange method


}