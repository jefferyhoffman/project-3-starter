const multer = require('multer')
const DIR = 'uploads';
const path = require('path')
const storage = multer.diskStorage(
    {
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
module.exports = storage