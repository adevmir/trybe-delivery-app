require('express-async-errors');
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error.middleware');
const router = require('./routes');

const app = express();
// Instalei o express async errors e o cors para resolver problemas de conexão com o frontend
app.use(cors());

app.use(express.json());
// criando rota estatica com acesso na pasta uploads dentro de backend/src
app.use('/images', express.static(__dirname.replace('/api', '/uploads')));

app.use(router);

app.use(errorMiddleware);

module.exports = app;
