const Contact = require('../Model/contactModel');

// Store a new contact

exports.storeContact = async (req, res) => {
    try {
        const { name, email, address, message } = req.body;

        if (!name || !email || !address || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContact = new Contact({ name, email, address, message });
        await newContact.save();

        res.status(201).json({ message: 'Contact submitted successfully', contact: newContact });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all contacts (including soft-deleted) for admin panel

exports.getAllContactsAdmin = async (req, res) => {
    try {
        const contacts = await Contact.find(); // fetch all, no filter
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Soft delete a contact

exports.softDeleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json({ message: 'Contact soft deleted', contact });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Restore a soft-deleted contact

exports.restoreContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndUpdate(id, { isDeleted: false }, { new: true });
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json({ message: 'Contact restored', contact });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Permanently delete a contact

exports.permanentDeleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json({ message: 'Contact permanently deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
