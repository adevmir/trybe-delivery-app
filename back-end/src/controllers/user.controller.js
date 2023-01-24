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

const registerUser = async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = await userService.createUser(data);
    return res.status(201).json({ message: 'Created' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  registerUser,
};