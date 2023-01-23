const { users } = require('../database/models');
const { jwtUtil } = require('../utils');
const md5 = require('md5');
const httpException = require('../utils/httpException');

const validEmailAndPassword = (user, login) => {
  if (!user) return false;
  if (md5(login.password) !== user.dataValues.password) return false;
  return true;
}

const login = async (data) => {
  const user = await users.findOne({ where: { email: data.email } });
  const validLogin = validEmailAndPassword(user, data);
  if (!validLogin) httpException(401, 'Incorrect email or password');
  const { id, name, email, role } = user.dataValues;
  const token = jwtUtil.createToken({ id, name, email, role });
  return token
}

module.exports = { login };