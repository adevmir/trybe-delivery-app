const { salesService } = require('../services');

const createSale = async (req, res) => {
  const { user, body } = req;
  const id = await salesService(body, user.id);
  return res.status(201).json({ id });
};

module.exports = { createSale };