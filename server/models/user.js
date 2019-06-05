'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {});

  User.prototype.comparePassword = function (challenge) {
    return this.password === challenge;
  }

  User.associate = function (models) {
    User.belongsToMany(models.Book, {
      through: models.BookUser,
      as: 'books',
      foreignKey: 'userId'
    });
  };

  return User;
};