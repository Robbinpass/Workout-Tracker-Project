const router = require('express').Router();

const apiRoutes = require('./api');


router.use('/api', apiRoutes);
// router.use('/exercise', exerciseroutes);
// router.use('/users', userroutes);

module.exports = router;