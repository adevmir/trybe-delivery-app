"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        // Mudando INTEGER para DECIMAL pois o preço deve ser nesse formato, exemplo: x.xx
        type: Sequelize.DECIMAL(3, 2),
      },
      urlImage: {
        type: Sequelize.STRING,
        field: "url_image",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
