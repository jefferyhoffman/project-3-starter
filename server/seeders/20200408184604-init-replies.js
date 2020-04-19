'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Replies', [{
        UserId: 1,
        ThreadId: 1,
        body: "Yes, I did reply to myself. And?",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Replies', null, {});
  }
};
