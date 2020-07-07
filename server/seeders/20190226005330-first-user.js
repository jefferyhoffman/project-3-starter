'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'jhoffman@trilogyed.com',
        password: 'test',
        username: 'daBoss',
        firstName: 'Jeff',
        lastName: 'Hoffman',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'maxA@trilogyed.com',
        password: 'test',
        username: 'daHelp',
        firstName: 'Max',
        lastName: 'Allee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'heather@test.com',
        password: 'test',
        username: 'lone-girl',
        firstName: 'Heather',
        lastName: 'Sorrells',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'jesse@test.com',
        password: 'test',
        username: 'serverBoss',
        firstName: 'Jesse',
        lastName: 'VanSlyke',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'ben@test.com',
        password: 'test',
        username: 'kamakazi-Ben',
        firstName: 'Ben',
        lastName: 'Cart',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'khamari@test.com',
        password: 'test',
        username: 'K-Man',
        firstName: 'Khamari',
        lastName: 'Thompson',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'thomas@test.com',
        password: 'test',
        username: 'obiwan',
        firstName: 'Thomas',
        lastName: 'Rider',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
