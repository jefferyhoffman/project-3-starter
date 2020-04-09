'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('Followers', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        FollowerId: 2,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        FollowerId: 2,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        FollowerId: 3,
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete('Followers', null, {});

  }
};
