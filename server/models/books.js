'use strict';
module.exports = function (sequelize, DataTypes) {
    var Book = sequelize.define('Book', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      series: {
        type: DataTypes.STRING,
      },
      synopsis: {
        type: DataTypes.STRING,
      }
    }, {});
  
    Book.associate = function(models) {
      Book.belongsToMany(models.User, {
        through: models.BookUser,
        as: 'users',
        foreignKey: 'bookId'  
      });
    };
  
    return Book;
  }
  