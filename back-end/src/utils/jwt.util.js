require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'secret_key';
const createToken = (data) => jwt.sign({ data }, jwtSecret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

module.exports = { createToken };