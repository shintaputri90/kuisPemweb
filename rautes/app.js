const express = require('express');
const router = express.Router();

// Route to render login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Route to render register page
router.get('/register', (req, res) => {
    res.render('register');
});

// Route to render profile page
router.get('/profile', (req, res) => {
    res.render('profile');
});

// Route to render my bookings page
router.get('/mybooking', (req, res) => {
    res.render('mybooking');
});

module.exports = router;
