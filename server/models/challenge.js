'use strict';
module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define("Challenge", {
        totalPoints: {
          type: DataTypes.INTEGER,
          defaultValue: 0, 
        }
        
      });
      Challenge.associate = function(models) {
        Challenge.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
        Challenge.hasMany(models.Action)
      };
      return Challenge;
};