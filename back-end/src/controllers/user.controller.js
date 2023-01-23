const { userService } = require('../services');

const login = async (req, res, next) => {
  try {
    const data = req.body;
    const token = await userService.login(data);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);    
  }
};

module.exports = { login };