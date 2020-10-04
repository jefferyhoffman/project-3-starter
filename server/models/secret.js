'use strict';
module.exports = (sequelize, DataTypes) => {
  const Secret = sequelize.define('Secret', {
    message: DataTypes.STRING
  }, {});

  Secret.associate = function (models) {
    // aproductid.belongsto(product.productId)
  };

  return Secret;
};
