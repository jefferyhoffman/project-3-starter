'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChallengeAction = sequelize.define('ChallengeAction', {}, {});
  ChallengeAction.associate = function(models) {
    // associations can be defined here
  };
  return ChallengeAction;
};