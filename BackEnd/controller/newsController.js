const NewsModel = require('../models/News');

// Create news article
const createNews = async (req, res) => {
    const { title, content, author, category, thumbnail } = req.body;

    try {
        const article = new NewsModel({ title, content, author, category, thumbnail });
        await article.save();
        res.status(200).send({ message: 'Article published successfully' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

// Get all news (excluding soft deleted)
const getNews = async (req, res) => {
    try {
        const articles = await NewsModel.find({ isDeleted: false }).sort({ createdAt: -1 });
        res.status(200).send({ data: articles });
    } catch (err) {
        res.status(400).send({ error: err.message });
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
        res.status(400).send({ error: err.message });
    }
};

// Update article
const updateNews = async (req, res) => {
    try {
        const result = await NewsModel.findOneAndUpdate(
            { _id: req.params._id, isDeleted: false },
            { $set: req.body },
            { new: true }
        );

        if (!result) {
            return res.status(404).send({ message: 'Article not found or deleted' });
        }

        res.status(200).send({ message: 'Article updated successfully', data: result });
    } catch (err) {
        res.status(400).send({ error: err.message });
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
        res.status(400).send({ error: err.message });
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
        res.status(400).send({ error: err.message });
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
