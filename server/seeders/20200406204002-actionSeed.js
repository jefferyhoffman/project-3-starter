"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert(
      "Actions",
      [
        {
          category: "Food",
          name: "Composting Food Waste",
          description:
            "Organic waste, that would otherwise be placed in the garbage, can be reduced by upwards of 80%.  This can reduce the average individuals amount of yearly waste by 277 pounds.",
          points: 50,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          category: "Travel",
          name: "Regularly Biking to Work/School",
          description:
            "More than 100 gallons of gasoline can be saved every year by the average commuter choosing to ride their bike to work.",
          points: 60,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          category: "Home",
          name: "Use of LED bulbs",
          description:
            "Replacing one incandescent bulb with an LED bulb can reduce a home's greenhouse gas emissions by half a ton.",
          points: 20,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          category: "Consumable Items",
          name: "Buying Clothing from Thrift Stores",
          description:
            "The average pair of jeans takes 1,800 gallons of water to produce. By wearing gently used clothing, the intesive process of producing textiles is, on the whole, reduced.",
          points: 20,
          createdAt: new Date,
          updatedAt: new Date
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete("Actions", null, {});
  },
};
