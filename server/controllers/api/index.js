const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/characters', require('./characterController'));
apiControllers.use('/leaderboard', require('./leaderboardController'));

module.exports = apiControllers;
