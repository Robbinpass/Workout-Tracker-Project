const router = require('express').Router();
const user = require('../../models/user');

// GET: User search by name
router.get('/:name', async (req,res) => {
    try {
        const userPull = await user.findbyPk(req.params.name);
        if (!userPull) {
            res.status(404).json({message: 'No user with this name!' });
            return;
        }
        res.status(200).json(user);    
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST: Create and add a new user
router.post('/', async (req,res) => {
    try {
        const newUser = await user.create({
          id: req.body.id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        });
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;



