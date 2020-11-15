// TEST DATA
const testWorkout = {
    name: 'test',
    reps: 4,
    complete: true
}

module.exports = app => {
    app.get('/api/workouts', (req, res) => {
        res.json(testWorkout);
    });
}