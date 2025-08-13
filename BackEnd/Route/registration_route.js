const express = require('express');
const router = express.Router();
const registerControllers = require('../Controller/registration');
const authMiddleware = require('../authMiddleware');

router.post('/register', registerControllers.register);
router.post('/login', registerControllers.login);

// Public fetch all users
router.get('/users', registerControllers.getuser);
router.put('/update/:id', async (req, res) => {
    try {
        const updated = await registerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;