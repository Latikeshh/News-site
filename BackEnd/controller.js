const NewsModel = require('./modal');

const createNews = async (req, res) => {
    try {
        const {
            title,
            slug,
            content,
            author,
            category,
            tags,
            publishedAt
        } = req.body;

        // Basic validation
        if (!title || !content) {
            return res.status(400).send({ error: "Title and content are required" });
        }

        const news = new NewsModel({
            title,
            slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
            content,
            author: author || 'Anonymous',
            category: category || 'General',
            tags: Array.isArray(tags) ? tags : [],
            publishedAt: publishedAt || new Date()
        });

        await news.save();
        res.status(201).send({ message: 'News created successfully', data: news });

    } catch (err) {
        console.error(err);
        res.status(400).send({ error: err.message });
    }
};

// ✅ Get all notes (excluding soft-deleted)
const getNews = async (req, res) => {
    try {
        const notes = await NewsModel.find({ isDelete: { $ne: true } });
        res.status(200).send({ data: notes });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

// ✅ Update a note
const updateNews = async (req, res) => {
    const { name, message } = req.body;
    const { _id } = req.params;

    try {
        const result = await NewsModel.updateOne(
            { _id },
            { $set: { name, message } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).send({ message: "Note not found" });
        }

        res.status(200).send({
            message: result.modifiedCount > 0
                ? "Note updated successfully"
                : "No changes were made"
        });

    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

// ✅ Soft delete (mark isDelete = true)
const softDeleteNews = async (req, res) => {
    const { _id } = req.params;

    try {
        const result = await NewsModel.updateOne(
            { _id },
            { $set: { isDelete: true } }
        );

        if (result.modifiedCount > 0) {
            res.status(200).send({ message: 'Note soft-deleted successfully' });
        } else {
            res.status(404).send({ message: 'Note not found or already deleted' });
        }
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

// ✅ Get a single note by ID
const getNewsById = async (req, res) => {
    const { _id } = req.params;

    try {
        const note = await NewsModel.findById(_id);

        if (!note || note.isDelete) {
            return res.status(404).send({ message: "Note not found" });
        }

        res.status(200).send({ data: note });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

// ✅ Hard delete (optional — if you want to remove completely)
const deleteNews = async (req, res) => {
    try {
        const result = await NewsModel.deleteOne({ _id: req.params._id });
        if (result.deletedCount > 0) {
            res.status(200).send({ message: "Note deleted permanently" });
        } else {
            res.status(404).send({ message: "Note not found" });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    createNews,
    getNews,
    updateNews,
    softDeleteNews,
    deleteNews,
    getNewsById  // 👈 Add this
};
