'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderDetails = sequelize.define('OrderDetails', {
    order_details_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_id: DataTypes.INTEGER,//FK
    product_qty: DataTypes.INTEGER,
    product_price: DataTypes.INTEGER,
    order_id: { //FK
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    subtotal: DataTypes.INTEGER 
    
  }, {});

//   OrderDetails.associate = function (models) {
//     // associations can be defined here
//   };

//   OrderDetails.prototype.comparePassword = function (challenge) {
//     return this.password === challenge;
//   }

  return OrderDetails;
};