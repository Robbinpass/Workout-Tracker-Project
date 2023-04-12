const router = require('express').Router();
// const exercise = require('js/models/exercise');
const workout = require('../../js/models/workout');

// Exercise search by name
router.get('/:name', async (req,res) => {
    try {
        const exercisePull = await exercise.findbyPk(req.params.name);
        if (!exercisePull) {
            res.status(404).json({message: 'No exercise with this name!' });
            return;
        }
        res.status(200).json(exercise);    
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/create', async (req,res) => {
    try {
        const newWorkout = await workout.create({
          name: req.body.workoutName,
        //   weight: req.body.weight,
        //   sets: req.body.sets,
        //   reps: req.body.reps,
        });
        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;



