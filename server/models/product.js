'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_name: DataTypes.STRING,
    category_description: DataTypes.STRING,
    category_img_one: DataTypes.STRING,
    category_img_two: DataTypes.STRING,
    category_img_three: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER //not sure if this needs to be made into a foreign key or if i just need to use assiciations to pair it
    
  }, {});

//   Product.associate = function (models) {
//     // associations can be defined here
//   };

//   Product.prototype.comparePassword = function (challenge) {
//     return this.password === challenge;
//   }

  return Product;
};