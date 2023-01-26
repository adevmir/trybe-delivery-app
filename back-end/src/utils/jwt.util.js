require('dotenv/config');
const jwt = require('jsonwebtoken');
const httpException = require('./httpException');
// importado o arquivo conforme o readme (Requisito 13) pede
const jwtSecret = require('fs').readFileSync('./jwt.evaluation.key');

// precisei comentar a linha abaixo para usar a jwtSecret do arquivo importado acima
// const jwtSecret = process.env.JWT_SECRET || 'secret_key';
const createToken = (data) => jwt.sign({ data }, jwtSecret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

const readToken = (token) => {
  try {
    const { data } = jwt.verify(token, jwtSecret);
    return data;
  } catch (error) {
    return httpException(401, 'Invalid or expired token');
  }
};

module.exports = { createToken, readToken };