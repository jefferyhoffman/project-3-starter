'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    img: DataTypes.TEXT
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};