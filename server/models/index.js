const User = require('./user');

let NEXT_UID = 2;
const USERS = [
  {
    id: 1,
    email: 'jhoffman@trilogyed.com',
    password: 'test'
  }
];

module.exports = {
  Users: {
    create: function ({ email, password }) {
      const user = new User({
        id: NEXT_UID++,
        email,
        password
      });

      USERS.push(user);

      return Promise.resolve(user);
    },

    findAll: function () {
      return Promise.resolve(USERS.map(u => new User(u)));
    },

    findOne: function ({ where }) {
      let pred;
      if (where.hasOwnProperty('email')) {
        pred = user => user.email === where.email;
      } else if (where.hasOwnProperty('id')) {
        pred = user => user.id === where.id
      }
      const record = USERS.find(pred);
      if (!record) {
        return Promise.resolve(undefined);
      }

      return Promise.resolve(new User(record));
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