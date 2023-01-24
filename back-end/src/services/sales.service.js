const Sequelize = require('sequelize');
const { sales, salesProducts } = require('../database/models');
const config = require('../database/config/config');
const httpException = require('../utils/httpException');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const saleFactory = (sale, userId) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;
  return { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pendente' };
};

const createSale = async (sale, userId) => {
  const t = await sequelize.transaction();
  try {
    const formatedSale = saleFactory(sale, userId);
    const newSale = await sales.create(formatedSale, { transaction: t });
    
    const saleProducts = sale.products.map((product) => 
      ({ saleId: newSale.dataValues.id, productId: product.id, quantity: product.quantity }));

    await salesProducts.bulkCreate(saleProducts, { transaction: t });
    
    await t.commit();
    return newSale.dataValues.id;
  } catch (e) {
    await t.rollback();
    return httpException(500, 'Something went wrong');
  }
};

module.exports = { createSale };