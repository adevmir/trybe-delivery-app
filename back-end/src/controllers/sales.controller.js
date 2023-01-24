const { salesService } = require('../services');

const createSale = async (req, res, next) => {
  try {
    const { user, body } = req;
    console.log(user);
    const id = await salesService.createSale(body, user.id);
    return res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
};

module.exports = { createSale };