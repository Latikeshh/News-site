const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Images/') // make sure 'uploads' folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });

module.exports = {
    photoUpload: upload.single('image') // 'image' must match your form-data key
}
