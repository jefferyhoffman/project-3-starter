'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      movement: {
        type: Sequelize.STRING
      },
      features: {
        type: Sequelize.STRING
      },
      caseMat: {
        type: Sequelize.STRING
      },     
       caseSize: {
        type: Sequelize.STRING
      },
      caseHeight: {
        type: Sequelize.STRING
      },
      waterRes: {
        type: Sequelize.STRING
      },
      lensMaterial: {
        type: Sequelize.STRING
      },
      caseBack: {
        type: Sequelize.STRING
      },
      crown: {
        type: Sequelize.STRING
      },
      bandType: {
        type: Sequelize.STRING
      },
      fittingSize: {
        type: Sequelize.STRING
      },
      claspType: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      //unsure if these are needed
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      //unsure if these are needed
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};