const { userService } = require('../services');

const login = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await userService.login(data);
    return res.status(200).json(user);
  } catch (error) {
    next(error);    
  }
};

module.exports = { login };