const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');

function convertTxtToPdf(req, res) {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }

  const txtFilePath = req.file.path;
  const pdfFileName = req.file.originalname.replace(/\.txt$/, '.pdf');
  const pdfFilePath = path.join(__dirname, '../uploads', pdfFileName);

  // Lê o conteúdo do arquivo txt
  fs.readFile(txtFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler arquivo.');
    }

    // Cria documento PDF
    const doc = new PDFDocument();

    // Salva o PDF no disco
    const writeStream = fs.createWriteStream(pdfFilePath);
    doc.pipe(writeStream);

    // Escreve o conteúdo do txt no PDF
    doc.text(data);

    doc.end();

    writeStream.on('finish', () => {
      // Retorna o PDF gerado para o cliente
      res.download(pdfFilePath, pdfFileName, (err) => {
        if (err) {
          res.status(500).send('Erro ao enviar PDF.');
        }

        // Apaga o arquivo txt e o PDF após envio, se quiser
        fs.unlink(txtFilePath, () => {});
        fs.unlink(pdfFilePath, () => {});
      });
    });

    writeStream.on('error', () => {
      res.status(500).send('Erro ao gerar PDF.');
    });
  });
}

module.exports = { convertTxtToPdf };
