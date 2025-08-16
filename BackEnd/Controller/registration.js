const registerModel = require('../Model/registration_model');

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        let user = await registerModel.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "Email already exists" });
        }
        user = new registerModel({
            name,
            email,
            password, // plain text (NOT secure)
            role
        });
        await user.save();
        res.json({ msg: "User Registered Successfully", user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await registerModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid email credentials" });
        }

        // Plain text password check
        if (password !== user.password) {
            return res.status(400).json({ msg: "Invalid password credentials" });
        }

        res.json({
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};

const getuser = async (req, res) => {
    try {
        const data = await registerModel.find();
        res.status(200).json(data); // return array directly
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { login, register, getuser };
