const { jwtUtil } = require('../utils');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { baseUrl } = req;
    const data = await jwtUtil.readToken(authorization);
    if (!baseUrl.includes(data.role)) return res.status(403).json({ message: 'Access denied' });
    next();
  } catch (error) {
    next(error);
  }
};