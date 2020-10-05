'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderTable = sequelize.define('OrderTable', {
    order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    order_number: {
       type: DataTypes.INTEGER,
       allowNull: false 
    },
    order_date: DataTypes.DATE,
    order_total: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER, //FK
    shipping_date: DataTypes.DATE,
    is_delivered: DataTypes.STRING,
    
  }, {});

//  OrderTable.associate = function (models) {
//     // associations can be defined here
//   };

//  OrderTable.prototype.comparePassword = function (challenge) {
//     return this.password === challenge;
//   }

  return OrderTable;
};