const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./src/routes/converter');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
