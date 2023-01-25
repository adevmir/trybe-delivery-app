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
  if (!validLogin) httpException(401, 'Incorrect email or password');
  const { id, name, email, role } = user.dataValues;
  const token = jwtUtil.createToken({ id, name, email, role });
  return { name, email, role, token };
};

const findUserByEmail = async (data) => {
  const user = await users.findOne({ where: { email: data } });
  return user;
};

const validateNewUser = async (data) => {
  const user = await users.findOne({ where: { name: data.name } });
  const email = await users.findOne({ where: { email: data.email } });

  if (user || email) httpException(409, 'Conflict');
  return true;
};

const createUser = async (data) => {
  const validation = await validateNewUser(data);

  if (validation === true) {    
    const md5Password = md5(data.password);
    
    await users.create({
      name: data.name,
      email: data.email,
      password: md5Password,
      role: 'customer',
    });
  }
};

const createUserByAdmin = async (data) => {
  const validation = await validateNewUser(data);

  if (validation === true) {
    const md5Password = md5(data.password);

    await users.create({
      name: data.name,
      email: data.email,
      password: md5Password,
      role: data.role,
    });
  }
};

module.exports = {
  login,
  createUser,
  findUserByEmail,
  createUserByAdmin,
};
