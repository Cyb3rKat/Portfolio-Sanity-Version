const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, `..`, `..`, "/client/public/images/blog"));
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    cb(null, file.originalname.split(".")[0] + "-" + Date.now() + ext);
  },
});

// const storage = multer.memoryStorage();

const uploadPosts = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50, // 50MB
  },
});

module.exports = uploadPosts;
