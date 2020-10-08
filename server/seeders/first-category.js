'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      category_name: 'PPE',
      category_description: 'Personal Protective Equipment',
      category_img: 'https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
