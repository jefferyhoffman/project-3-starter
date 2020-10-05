'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category_name: DataTypes.STRING,
    category_img: DataTypes.STRING,
    category_description: DataTypes.STRING,
  }, {});

//   Category.associate = function (models) {
//     // associations can be defined here
//   };

//   Category.prototype.comparePassword = function (challenge) {
//     return this.password === challenge;
//   }

  return Category;
};