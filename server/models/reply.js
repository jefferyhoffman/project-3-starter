'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  }, {});

  Reply.associate = function(models) {
    Reply.belongsTo(models.Thread, {
      foreignKey: {
          allowNull: false
      }
    });

    Reply.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    });
  };

  return Reply;
};