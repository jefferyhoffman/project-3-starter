'use strict';

module.exports = function(sequelize, DataTypes) {
  const Action = sequelize.define("Action", {
    
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
      allowNull: true,
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
  Action.associate = function(models) {
    Action.belongsToMany(models.Challenge, {
      through: models.ChallengeAction
    });
  };

  return Action;
};