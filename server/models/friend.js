'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {}, {});
  Friend.associate = function(models) {
    // associations can be defined here
  };
  return Friend;
};