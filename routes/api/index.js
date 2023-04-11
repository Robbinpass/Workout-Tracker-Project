const router = require('express').Router();

const exerciseroutes = require('./exerciseroutes');
const userroutes = require('./userroutes');

router.use('/exercise', exerciseroutes);
router.use('/users', userroutes);

module.exports = router;
