const NewsModel = require('../models/News');

// Create news article
const createNews = async (req, res) => {
    const { title, content, author, category, thumbnail } = req.body;

    if (!title || !content) {
        return res.status(400).send({ error: 'Title and content are required' });
    }

    try {
        const article = new NewsModel({ title, content, author, category, thumbnail });
        await article.save();
        res.status(201).send({ message: 'Article published successfully', data: article });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Get all news (excluding soft deleted) with pagination support
const getNews = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const articles = await NewsModel.find({ isDeleted: false })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await NewsModel.countDocuments({ isDeleted: false });

        res.status(200).send({ data: articles, pagination: { total, page, limit } });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Get news by ID
const getNewsById = async (req, res) => {
    try {
        const article = await NewsModel.findById(req.params._id);
        if (!article || article.isDeleted) {
            return res.status(404).send({ message: 'Article not found' });
        }
        res.status(200).send({ data: article });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Update article
const updateNews = async (req, res) => {
    try {
        // Prevent updating createdAt, isDeleted or _id
        const updateData = { ...req.body };
        delete updateData.createdAt;
        delete updateData.isDeleted;
        delete updateData._id;

        const result = await NewsModel.findOneAndUpdate(
            { _id: req.params._id, isDeleted: false },
            { $set: updateData },
            { new: true }
        );

        if (!result) {
            return res.status(404).send({ message: 'Article not found or deleted' });
        }

        res.status(200).send({ message: 'Article updated successfully', data: result });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Soft delete
const softDeleteNews = async (req, res) => {
    try {
        const result = await NewsModel.updateOne(
            { _id: req.params._id },
            { $set: { isDeleted: true } }
        );

        if (result.modifiedCount > 0) {
            res.status(200).send({ message: 'Article soft-deleted' });
        } else {
            res.status(404).send({ message: 'Article not found' });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Hard delete
const deleteNews = async (req, res) => {
    try {
        const result = await NewsModel.deleteOne({ _id: req.params._id });
        if (result.deletedCount > 0) {
            res.status(200).send({ message: 'Article deleted permanently' });
        } else {
            res.status(404).send({ message: 'Article not found' });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = {
    createNews,
    getNews,
    getNewsById,
    updateNews,
    softDeleteNews,
    deleteNews
};
