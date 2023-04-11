const router = require('express').Router();
// const exercise = require('js/models/exercise');
const exercise = require('../../js/models/exercise');

// Exercise search by name
router.get('/:name', async (req,res) => {
    try {
        const exercisePull = await user.findbyPk(req.params.name);
        if (!exercisePull) {
            res.status(404).json({message: 'No excercise with this name!' });
            return;
        }
        res.status(200).json(exercise);    
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req,res) => {
    try {
        const exercise = await exercise.create({
          id: req.body.id,
          name: req.body.name,
          weight: req.body.weight,
          sets: req.body.sets,
          reps: req.body.reps,
        });
        res.status(200).json(exercise);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;



