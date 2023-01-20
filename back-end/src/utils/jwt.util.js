require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

module.exports = { createToken };