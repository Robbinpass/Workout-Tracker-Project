const router = require('express').Router();

const exerciseroutes = require('../controllers/Routes/exerciseroutes');
const apiRoutes = require('./Routes/api');

router.use('/exercise', exerciseroutes);
router.use('/api', apiRoutes);

module.exports = router;