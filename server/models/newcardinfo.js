'use strict';
module.exports = (sequelize, DataTypes) => {
  const Newcardinfo = sequelize.define('Newcardinfo', {
    newname: DataTypes.STRING,
    company: DataTypes.STRING,
    newemail: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Newcardinfo.associate = function(models) {
    Newcardinfo.belongsTo(models.User);
  };
  return Newcardinfo;
};