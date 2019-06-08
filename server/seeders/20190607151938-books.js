'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Adam The React Guy',
        author: 'Adam Pegram',
        imageURL: 'https://via.placeholder.com/100',
        series: 'Hello World',
        synopsis: 'The many reactions of AP'
      },
      {
        title: 'Katja created a book keeping app',
        author: 'Katja Dulmaine',
        imageURL: 'https://via.placeholder.com/100',
        series: 'Keeper of the Books',
        synopsis: 'All the books I have'
      },
      {
        title: 'Creole Recipes',
        author: 'Lou Celestin',
        imageURL: 'https://via.placeholder.com/100',
        series: 'All the foods',
        synopsis: 'Eat it all'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
