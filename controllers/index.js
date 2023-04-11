const router = require('express').Router();

const exerciseroutes = require('js\models\exercise.js');
const apiRoutes = require('./api');

router.use('/exercise', exerciseroutes);
router.use('/api', apiRoutes);

module.exports = router;