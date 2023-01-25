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

const registerUser = async (req, res, next) => {
  try {
    const data = req.body;
    await userService.createUser(data);
    return res.status(201).json({ message: 'Created' });
  } catch (error) {
    next(error);
  }
};

const adminRegister = async (req, res, next) => {
  try {
    const data = req.body;
    await userService.createUserByAdmin(data);
    return res.status(201).json({ message: 'Created' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  registerUser,
  adminRegister,
};
