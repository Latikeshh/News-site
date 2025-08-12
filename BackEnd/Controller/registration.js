const registerModel = require('../Model/registration_model');

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await registerModel.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new registerModel({
            email,
            password: hashedPassword,
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

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid password credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};

const getuser = async (req, res) => {
    try {
        const data = await registerModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send({ error: error.message })
    }
}

module.exports = { login, register, getuser };
