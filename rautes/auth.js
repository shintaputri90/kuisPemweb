const express = require('express');
const router = express.Router();

// Add your user model
const User = require('../models/User'); // Assume you have a User model

// Register route
router.post('/register', async (req, res) => {
    const { username, email, phone, password } = req.body;
    const user = new User({ username, email, phone, password });
    await user.save();
    res.redirect('/login');
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Add your authentication logic here
    res.redirect('/profile');
});

module.exports = router;
