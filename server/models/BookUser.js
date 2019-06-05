'use strict';
module.exports = (sequelize, DataTypes) => {
    const BookUser = sequelize.define('BookUser', {
      rating: {
        type: DataTypes.INTEGER
      },
      review: {
        type: DataTypes.TEXT
      }
    }, {});
  
    return BookUser;
  };