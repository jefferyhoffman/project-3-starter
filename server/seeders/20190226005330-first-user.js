"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "test@test.com",
          password: "test",
          name: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "test2@test.com",
          password: "test",
          name: "test2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "test3@test.com",
          password: "test",
          name: "test3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "test4@test.com",
          password: "test",
          name: "test4",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
