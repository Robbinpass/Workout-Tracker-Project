const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('landing', { 
        landing_page: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            login_page: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;