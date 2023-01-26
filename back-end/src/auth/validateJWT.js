require('dotenv/config');

const jwt = require('jsonwebtoken');

const { userService } = require('../services');

const jwtSecret = process.env.JWT_SECRET || 'secret_key';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    
    const user = await userService.findUserByEmail(decoded.data.email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token!' });
    }
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
