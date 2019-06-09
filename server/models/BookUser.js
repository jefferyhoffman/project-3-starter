'use strict';
module.exports = (sequelize, DataTypes) => {
    const BookUser = sequelize.define('BookUser', {
      rating: {
        type: DataTypes.INTEGER
      },
      review: {
        type: DataTypes.TEXT
      },
      bookId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    }, {});
  
    return BookUser;
  };