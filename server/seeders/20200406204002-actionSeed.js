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
