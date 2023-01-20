const { userService } = require("../services");

const login = async (req, res) => {
  const data = req.body;
  const token = await userService.login(data);
  return res.status(200).json({ token });
}

module.exports = { login };