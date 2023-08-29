const { jwtUtil } = require('../utils');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token is required' });
  try {
    const data = jwtUtil.readToken(authorization);
    req.user = data;
    next();
  } catch (error) {
    next(error);
  }
};