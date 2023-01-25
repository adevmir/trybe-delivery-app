const { salesService } = require('../services');

const createSale = async (req, res, next) => {
  try {
    const { user, body } = req;
    const id = await salesService.createSale(body, user.id);
    return res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.findById(id);
    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

module.exports = { createSale, findById };