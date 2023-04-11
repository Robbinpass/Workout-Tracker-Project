const router = require('express').Router();


const exerciseroutes = require('../controllers/Routes/exerciseroutes');
const userRoutes = require('./Routes/api/userRoutes')
const homeRoutes = require('./homeRoutes')
// const apiRoutes = require('./Routes/api');

router.use('/', homeRoutes)
router.use('/exercise', exerciseroutes);
router.use('/user', userRoutes)

// router.use('/api', apiRoutes);

module.exports = router;