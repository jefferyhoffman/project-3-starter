'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('ChallengeActions', [{
        createdAt: new Date(),
        updatedAt: new Date(),
        ActionId: 1,
        ChallengeId: 1,
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('ChallengeActions', null, {});
    
  }
};
