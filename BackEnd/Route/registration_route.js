const express = require('express');
const router = express.Router();
const registerControllers = require('../Controller/registration');

router.post('/register', registerControllers.register);
router.post('/login', registerControllers.login);
router.get('/getusers', registerControllers.getuser);          // Admin: shows all users (deleted + active)
router.put('/users/:id', registerControllers.deleteUser); // Soft delete
router.put('/update/:id', registerControllers.updateUser);    // Update
router.put('/recover/:id', registerControllers.recoverUser);

module.exports = router;
