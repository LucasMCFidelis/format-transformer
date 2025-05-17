const express = require('express');
const multer = require('multer');
const path = require('path');
const { convertTxtToPdf } = require('../controllers/converter'); // verifique este caminho!

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

router.post('/convert', upload.single('file'), convertTxtToPdf);

module.exports = router;
