const express = require('express');
const router = express.Router();
const contactCtrl = require('../Controller/contactControl');
// Store contact form
router.post('/storecontact', contactCtrl.storeContact);
// Admin: view all contacts (active + deleted)
router.get('/admincontacts', contactCtrl.getAllContactsAdmin);// Admin: actions
router.delete('/softdelete/:id', contactCtrl.softDeleteContact);   // Soft delete
router.patch('/restore/:id', contactCtrl.restoreContact);          // Restore
router.delete('/delete/:id', contactCtrl.permanentDeleteContact);  // Permanent delete

module.exports = router;
