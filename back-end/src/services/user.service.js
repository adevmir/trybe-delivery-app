const { User } = require('../database/models');
const { jwtUtil } = require('../utils');

const validateLogin = async (login) => {
  const user = await User.findOne({ where: { email: login.email } });
  const { id, name, email, role } = user.dataValues;
  const token = jwtUtil.createToken({ id, name, email, role })
  return token
}

module.exports = { validateLogin };