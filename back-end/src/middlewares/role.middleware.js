const { jwtUtil } = require('../utils');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { baseUrl } = req;
    let { role } = await jwtUtil.readToken(authorization);
    if (role === 'administrator') {
      role = 'admin';
    }
    if (!baseUrl.includes(role)) return res.status(403).json({ message: 'Access denied' });
    next();
  } catch (error) {
    next(error);
  }
};