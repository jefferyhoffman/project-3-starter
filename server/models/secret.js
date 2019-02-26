'use strict';
module.exports = (sequelize, DataTypes) => {
  const Secret = sequelize.define('Secret', {
    message: DataTypes.STRING
  }, {});

  Secret.associate = function (models) {
    // associations can be defined here
  };

  return Secret;
};
