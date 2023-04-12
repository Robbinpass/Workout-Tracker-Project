const router = require('express').Router();
const  user  = require('../../../js/models/user.js');

router.post('/signup', async (req, res) => {
    try {
        console.log("printing req.body for user signup route",req.body);
        console.log(user);
        const userData = await user.create(req.body);
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await user.findOne({ where: { email: req.body.email } });

        if(!userData) {
            res
                .status(400)
                .json({ message: 'Invalid username or password' });
            return;
        }

        const validPassword = req.body.password == userData.password //await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Invalid username or password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Login successful!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        res.session.destroy(() => {
            res.status(204).end();
        });
    } else {
    res.status(404).end();
    }
});

module.exports = router;