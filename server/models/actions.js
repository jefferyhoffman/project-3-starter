'use strict';

module.exports = function(sequelize, DataTypes) {
  const Actions = sequelize.define("Actions", {
    
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 1, 
    }
    
  });
  // Needs work
  Actions.associate = function(models) {
    Actions.belongsToMany(models.Challenges, {
      through: something
    });
  };
  return Actions;
};