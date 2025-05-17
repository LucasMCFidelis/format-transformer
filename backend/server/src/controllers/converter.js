const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const convertFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Erro no upload do arquivo' });
  }

  const filePath = path.join(__dirname, '../../uploads', req.file.filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return res.status(500).json({ error: 'Erro ao ler o arquivo' });
    }

    const doc = new PDFDocument();
    const outputPath = path.join(__dirname, '../../uploads', `${req.file.filename}.pdf`);
    const writeStream = fs.createWriteStream(outputPath);

    doc.pipe(writeStream);
    doc.text(data);
    doc.end();

    writeStream.on('finish', () => {
      res.download(outputPath, 'converted.pdf', (err) => {
        if (err) {
          console.error('Erro ao enviar o PDF:', err);
          res.status(500).json({ error: 'Erro ao enviar o PDF' });
        }

        // Limpeza dos arquivos temporários (opcional)
        fs.unlinkSync(filePath);
        fs.unlinkSync(outputPath);
      });
    });
  });
};

module.exports = { convertFile };
