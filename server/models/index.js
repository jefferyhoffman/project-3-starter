const User = require('./user');

module.exports = {
  Users: {
    findAll: function () {
      return Promise.resolve(
        new User({
          id: 1,
          email: 'jhoffman@trilogyed.com',
          password: 'test'
        })
      );
    },

    findOne: function () {
      return Promise.resolve(
        new User({
          id: 1,
          email: 'jhoffman@trilogyed.com',
          password: 'test'
        })
      );
    }
  },

  Secrets: {
    findAll: function () {
      return Promise.resolve([
        {
          id: 1,
          message: 'The clock tolls twice at midnight on the next full moon'
        }
      ]);
    }
  }
}