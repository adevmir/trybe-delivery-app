"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.products.belongsToMany(models.sales, {
        as: "products",
        through: "salesProducts",
        foreignKey: "saleId",
        otherKey: "productId",
      });
      models.sales.belongsToMany(models.products, {
        as: "sales",
        through: "salesProducts",
        foreignKey: "productId",
        otherKey: "saleId",
      });
    }
  }
  salesProducts.init(
    {
      saleId: DataTypes.NUMBER,
      productId: DataTypes.NUMBER,
      quantity: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "salesProducts",
      underscored: true,
      timestamps: false,
    }
  );
  return salesProducts;
};
