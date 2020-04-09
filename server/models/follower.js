'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {}, {});
  Follower.associate = function(models) {
    // associations can be defined here
  };
  return Follower;
};