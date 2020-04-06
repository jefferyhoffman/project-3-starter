'use strict';

module.exports = function(sequelize, DataTypes) {
  const Challenges = sequelize.define("Challenges", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    totalPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 0, 
    }
    
  });
  Challenges.associate = function(models) {
    Challenges.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Challenges.hasMany(models.Actions, {
      
    })
  };
  return Challenges;
};