const { User } = require('../database/models');
const { jwtUtil } = require('../utils');

const login = async (data) => {
  const user = await User.findOne({ where: { email: data.email } });
  const { id, name, email, role } = user.dataValues;
  const token = jwtUtil.createToken({ id, name, email, role })
  return token
}

module.exports = { login };