const fs = require("fs");
const path = require("path");
const multer = require("multer");

const uploadDirectory = path.join(__dirname, "..", "uploads", "services");
const allowedMimeTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const ensureUploadDirectory = () => {
  fs.mkdirSync(uploadDirectory, { recursive: true });
};

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    ensureUploadDirectory();
    callback(null, uploadDirectory);
  },
  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname || "").toLowerCase();
    const timestamp = Date.now();
    const randomSuffix = Math.round(Math.random() * 1e9);

    callback(null, `${timestamp}-${randomSuffix}${extension}`);
  },
});

const fileFilter = (_req, file, callback) => {
  if (!allowedMimeTypes.has(file.mimetype)) {
    return callback(new Error("Chi chap nhan file anh jpeg, png, webp hoac gif"));
  }

  callback(null, true);
};

const uploader = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
}).fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "images", maxCount: 10 },
]);

const uploadServicesImages = (req, res, next) => {
  uploader(req, res, (error) => {
    if (error) {
      return res.status(400).json({
        message: error.message || "Upload anh that bai",
      });
    }

    next();
  });
};

module.exports = {
  uploadServicesImages,
};
