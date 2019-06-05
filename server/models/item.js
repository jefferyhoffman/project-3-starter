'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    description: DataTypes.TEXT,
    movement: DataTypes.STRING,
    features: DataTypes.STRING,
    caseMat: DataTypes.STRING,
    caseSize: DataTypes.STRING,
    caseHeight: DataTypes.STRING,
    waterRes: DataTypes.STRING,
    lensMaterial: DataTypes.STRING,
    caseBack: DataTypes.STRING,
    crown: DataTypes.STRING,
    bandType: DataTypes.STRING,
    fittingSize: DataTypes.STRING,
    claspType: DataTypes.STRING,
    weight: DataTypes.STRING,
    img: DataTypes.TEXT
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};