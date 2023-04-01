'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laptop extends Model {
    static associate(models) {
    }
  };
  Laptop.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    sold: DataTypes.INTEGER,
    dateManufacture: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Laptop',
    tableName: 'laptops',
    timestamps: false
  });
  return Laptop;
};