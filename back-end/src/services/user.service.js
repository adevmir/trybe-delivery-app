const md5 = require('md5');
const { users } = require('../database/models');
const { jwtUtil } = require('../utils');
const httpException = require('../utils/httpException');

const validEmailAndPassword = (user, login) => {
  if (!user) return false;
  if (md5(login.password) !== user.dataValues.password) return false;
  return true;
};

const login = async (data) => {
  const user = await users.findOne({ where: { email: data.email } });
  const validLogin = validEmailAndPassword(user, data);
  if (!validLogin) httpException(404, 'Incorrect email or password');
  const { id, name, email, role } = user.dataValues;
  const token = await jwtUtil.createToken({ id, name, email, role });
  return { name, email, role, token };
};

// const validateNewUser = (data) => {
//   const regex = /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.(com)(\.[a-z]+)?/
//   if (data.name < 12) return false;
//   if (!data.email.match(regex)) return false;
//   if (data.password < 6) return false;
//   return true;
// }

const createUser = async (data) => {
  const user = await users.findOne({ where: { name: data.name } });
  const email = await users.findOne({ where: { email: data.email } });
  if (user || email) httpException(409, 'Conflict');

  // const validateUser = validateNewUser(data)
  // if (!validateUser) httpException(401, 'Invalid user format');
  const md5Password = md5(data.password);

  const newUser = await users.create({
    name: data.name,
    email: data.email,
    password: md5Password,
    role: 'customer',
  });

  return newUser;
};

module.exports = {
  login,
  createUser,
};
