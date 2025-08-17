const usermodal = require('../Model/modal')

const adduser = async (req, res) => {
    const { title, slug, content, author, category, tags, publishedAt, isDeleted, image } = req.body

    try {
        const data = new usermodal({
            title,
            slug,
            content,
            author,
            category,
            tags,
            publishedAt,
            isDeleted: isDeleted || false, // default to false
            image: req.file?.filename || null,
        })
        await data.save()
        res.send({ message: 'User Registered Successfully', data });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

const getuser = async (req, res) => {
    try {
        const data = await usermodal.find({ isDeleted: false }) // exclude deleted
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
}
const getAllUsersAdmin = async (req, res) => {
    try {
        const data = await usermodal.find(); // no filter
        res.status(200).send({ data });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};
const getCategory = async (req, res) => {
    try {
        const categories = await usermodal.aggregate([
            { $match: { isDeleted: false } },
            { $group: { _id: "$category", count: { $sum: 1 } } },
            { $sort: { _id: 1 } } // sort alphabetically
        ]);
        res.status(200).send(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

const updateuser = async (req, res) => {
    const { title, slug, content, author, category, tags, publishedAt, isDeleted, image } = req.body

    const updateData = {
        title,
        slug,
        content,
        author,
        category,
        tags,
        publishedAt,
        isDeleted: isDeleted || false,
    };

    if (req.file && req.file.filename) {
        updateData.image = req.file.filename;
    } else if (image) {
        updateData.image = image;
    }

    try {
        const data = await usermodal.updateOne(
            { _id: req.params._id },
            { $set: updateData }
        );

        if (data.modifiedCount > 0) {
            res.status(200).send({ message: "User Update successfully" });
        } else {
            res.status(200).send({ message: "No changes made or record not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: err.message });
    }
};

const deleteuser = async (req, res) => {
    try {
        const data = await usermodal.updateOne(
            { _id: req.params._id },
            { $set: { isDeleted: true } } // soft delete
        );

        if (data.modifiedCount > 0) {
            res.status(200).send({ message: "User soft deleted successfully" });
        } else {
            res.status(404).send({ message: "User not found or already deleted" });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
};

// Recover soft-deleted user
const recoverUser = async (req, res) => {
    try {
        const data = await usermodal.updateOne(
            { _id: req.params._id },
            { $set: { isDeleted: false } }
        );

        if (data.modifiedCount > 0) {
            res.status(200).send({ message: "User recovered successfully" });
        } else {
            res.status(404).send({ message: "User not found or already active" });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
};

const getdataOnebyid = async (req, res) => {
    try {
        const userData = await usermodal.findOne({ _id: req.params._id, isDeleted: false })
        res.status(200).send({ userData })
    } catch (err) {
        res.status(400).send(err)
    }
}

const getNewsByCategory = async (req, res) => {
    try {
        const { category } = req.query; // category passed as query param
        if (!category) {
            return res.status(400).send({ message: "Category is required" });
        }

        const data = await usermodal.find({ category, isDeleted: false })
            .sort({ publishedAt: -1 }); // latest first

        res.status(200).send(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Server Error" });
    }
};
const searchNews = async (req, res) => {
    try {
        const { q } = req.query; // search keyword from frontend

        if (!q) {
            return res.status(400).send({ message: "Search query is required" });
        }

        const data = await usermodal.find({
            isDeleted: false,
            $or: [
                { title: { $regex: q, $options: "i" } },     // case-insensitive title match
                { tags: { $regex: q, $options: "i" } },      // search in tags
                { category: { $regex: q, $options: "i" } },   // search in category
                { author: { $regex: q, $options: "i" } } 
            ]
        }).sort({ publishedAt: -1 }); // latest first

        res.status(200).send({ data });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Server Error" });
    }
};// inside your controllar.js

const getNewsByDate = async (req, res) => {
    try {
        const { date } = req.query; // expected format: YYYY-MM-DD
        if (!date) return res.status(400).send({ message: "Date is required" });

        const start = new Date(date);
        const end = new Date(date);
        end.setHours(23, 59, 59, 999); // end of the selected day

        const data = await usermodal.find({
            publishedAt: { $gte: start, $lte: end },
            isDeleted: false
        }).sort({ publishedAt: -1 }); // latest first

        res.status(200).send({ data });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Server Error" });
    }
};

const getNewsByAuthor = async (req, res) => {
    try {
        const { author } = req.query; // author name passed as query param
        if (!author) return res.status(400).send({ message: "Author is required" });

        const data = await usermodal.find({
            author: { $regex: author, $options: "i" }, // case-insensitive match
            isDeleted: false
        }).sort({ publishedAt: -1 }); // latest first

        res.status(200).send({ data });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Server Error" });
    }
};
module.exports = {
    recoverUser,
    adduser,
    getuser,
    updateuser,
    deleteuser,
    getdataOnebyid,
    getCategory,
    getAllUsersAdmin,
    getNewsByCategory,
    getNewsByDate,
    searchNews,
    getNewsByAuthor
};
