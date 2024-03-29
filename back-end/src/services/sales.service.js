const Sequelize = require('sequelize');
const { sales, salesProducts, users, products } = require('../database/models');
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
    return httpException(500, 'Something went wrong while creating the sale');
  }
};

const findById = async (id) => {
  const sale = await sales.findOne({ where: { id },
    include: [{ model: users, as: 'seller', attributes: ['name'] }, 
    { model: users, as: 'user', attributes: ['name'] },
    { model: products, as: 'products', through: { attributes: ['quantity'] } },
  ] });
  if (!sale) return httpException(404, 'Not found');
  return sale;
};

const findOrdersByCustomer = async (userId) => sales.findAll({ where: { userId } });

const findOrdersBySeller = async (sellerId) => sales.findAll({ where: { sellerId } });

const updateOrder = async (id, status) => {
  await sales.update({ status }, { where: { id } });
  return 'Updated';
};

module.exports = { createSale, findById, findOrdersByCustomer, findOrdersBySeller, updateOrder };