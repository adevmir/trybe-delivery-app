const { products } = require('../database/models');

const getAll = async () => products.findAll();

module.exports = { getAll };