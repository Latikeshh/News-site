const registerModel = require('../Model/registration_model');
const News = require('../Model/modal'); // your news model

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        let user = await registerModel.findOne({ email, isDeleted: false });
        if (user) {
            return res.status(400).json({ msg: "Email already exists" });
        }
        user = new registerModel({
            name,
            email,
            password, // ⚠️ plain text (should hash later!)
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
        const user = await registerModel.findOne({ email, isDeleted: false }); // block deleted users
        if (!user) {
            return res.status(400).json({ msg: "Invalid email credentials" });
        }
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

// ✅ Show ALL users (deleted + active) → Admin panel use
const getuser = async (req, res) => {
    try {
        const data = await registerModel.find(); // no filter
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Soft delete
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await registerModel.findByIdAndUpdate(
            id,
            { isDeleted: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json({ msg: "User soft deleted successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user + update name in News posts
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        // 1️⃣ Find old user first
        const oldUser = await registerModel.findById(id);
        if (!oldUser) return res.status(404).json({ msg: "User not found" });

        // 2️⃣ Update user fields
        const updatedUser = await registerModel.findByIdAndUpdate(
            id,
            { name, email, password, role },
            { new: true, runValidators: true }
        );
        // 3️⃣ Update all news posts where this user is the author
        await News.updateMany(
            { authorEmail: oldUser.email }, // assuming you link news to user by email
            { $set: { authorName: name } }
        );
        res.json({ msg: "User and related news updated successfully", user: updatedUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// ✅ Recover soft-deleted user
const recoverUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await registerModel.findByIdAndUpdate(
            id,
            { isDeleted: false },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json({ msg: "User recovered successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { login, register, getuser, deleteUser, updateUser, recoverUser };
