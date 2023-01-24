const { jwtUtil } = require('../utils');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const data = jwtUtil.readToken(authorization);
    console.log(data);
    req.user = data;
    next();
  } catch (error) {
    next(error);
  }
};