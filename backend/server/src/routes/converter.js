const express = require('express');
const multer = require('multer');
const { convertFile } = require('../controllers/converter');

const router = express.Router();

// Configuração do multer
const upload = multer({ dest: 'uploads/' });

// Rota que aceita arquivo
router.post('/convert', upload.single('file'), convertFile);

module.exports = router;
