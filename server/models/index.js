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
  Users: require('./user'),
  Secrets: require('./secret')
}