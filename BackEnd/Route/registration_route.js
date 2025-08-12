const express = require('express');
const router = express.Router();
const registerControllers = require('../Controller/registration');
const authMiddleware = require('../authMiddleware');

router.post('/register', registerControllers.register);
router.post('/login', registerControllers.login);

router.get('/find', authMiddleware, registerControllers.getuser);

module.exports = router;