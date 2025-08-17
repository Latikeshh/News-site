const express = require('express');
const router = express.Router();
const registerControllers = require('../Controller/registration');

router.post('/register', registerControllers.register);
router.post('/login', registerControllers.login);
router.get('/users', registerControllers.getuser);          // Admin: shows all users (deleted + active)
router.delete('/users/:id', registerControllers.deleteUser); // Soft delete
router.put('/update/:id', registerControllers.updateUser);    // Update

module.exports = router;
