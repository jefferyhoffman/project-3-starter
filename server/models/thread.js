'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1]
      }
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
    }
  }, {});

  Thread.associate = function(models) {
    Thread.hasMany(models.Reply, {
      onDelete: "cascade"
    });

    Thread.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    });
  };

  return Thread;
};