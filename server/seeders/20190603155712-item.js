'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkInsert('Items', [{
        name: 'Kong',
        price: 18000,
        quantity: 4,
        brand: 'STORM',
        img: './client/src/pages/Home/id-01.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Donferg',
        price: 19000,
        quantity: 15,
        brand: 'STORM',
        img: './client/src/pages/Home/id-02.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Valena',
        price: 15000,
        quantity: 6,
        brand: 'STORM',
        img: './client/src/pages/Home/id-03.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yang-X',
        price: 11000,
        quantity: 15,
        brand: 'STORM',
        img: './client/src/pages/Home/id-04.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yawo-XL',
        price: 38000,
        quantity: 2,
        brand: 'STORM',
        img: './client/src/pages/Home/id-05.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razar LTE',
        price: 22000,
        quantity: 10,
        brand: 'STORM',
        img: './client/src/pages/Home/id-06.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razar BLD',
        price: 22000,
        quantity: 10,
        brand: 'STORM',
        img: './client/src/pages/Home/id-07.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Slim-X  XL',
        price: 55000,
        quantity: 3,
        brand: 'STORM',
        img: './client/src/pages/Home/id-08.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Court-XS',
        price: 14000,
        quantity: 15,
        brand: 'STORM',
        img: './client/src/pages/Home/id-09.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'D-Nelli',
        price: 12000,
        quantity: 15,
        brand: 'STORM',
        img: './client/src/pages/Home/id-10.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ten-Win',
        price: 68000,
        quantity: 2,
        brand: 'STORM',
        img: './client/src/pages/Home/id-11.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mia-M',
        price: 28000,
        quantity: 13,
        brand: 'STORM',
        img: './client/src/pages/Home/id-12.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Item', null, {});
  }
};
