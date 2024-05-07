"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },

      product_name: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },

      no_of_stocks: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },

      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};
