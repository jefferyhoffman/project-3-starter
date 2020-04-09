'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 50]
      }
    }
  }, {});

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Challenge, {
      onDelete: "cascade"
    });
    User.belongsToMany(models.User, {
      as: "Friend",
      through: models.Follower
    });
  };

  User.prototype.comparePassword = function (challenge) {
    return this.password === challenge;
  }

  return User;
};