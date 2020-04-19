'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChallengeAction = sequelize.define('ChallengeAction', {
    accomplished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {});
  ChallengeAction.associate = function(models) {
    // associations can be defined here
  };
  return ChallengeAction;
};