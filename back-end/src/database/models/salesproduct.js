"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class salesProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.products.belongsToMany("sales", {
        as: "products",
        through: "salesProduct",
        foreignKey: "saleId",
        otherKey: "productId",
      });
      models.sales.belongsToMany("products", {
        as: "sales",
        through: "salesProduct",
        foreignKey: "productId",
        otherKey: "saleId",
      });
    }
  }
  salesProduct.init(
    {
      saleId: DataTypes.NUMBER,
      productId: DataTypes.NUMBER,
      quantity: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "salesProduct",
      underscored: true,
      timestamps: false,
    }
  );
  return salesProduct;
};
