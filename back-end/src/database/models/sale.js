"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.sales.belongsTo(models.users, {
        foreignKey: 'sellerId',
        as: 'seller',
      });
      models.sales.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Sale.init(
    {
      userId: DataTypes.NUMBER,
      sellerId: DataTypes.NUMBER,
      totalPrice: DataTypes.NUMBER,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "sales",
      underscored: true,
      timestamps: true,
      createdAt: 'saleDate',
      updatedAt: false,
    }
  );
  return Sale;
};
