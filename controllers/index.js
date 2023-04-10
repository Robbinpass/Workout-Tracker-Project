const router = require('express').Router();

const exerciseroutes = require('js\models\exercise.js');

router.use('/exercise', exerciseroutes);

module.exports = router;