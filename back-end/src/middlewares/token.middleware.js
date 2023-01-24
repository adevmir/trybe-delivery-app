const { jwtUtil } = require('../utils');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const data = jwtUtil.readToken(authorization);
    req.user = data;
    next();
  } catch (error) {
    next(error);
  }
};