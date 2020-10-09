const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/forum', require('./forumController'));
apiControllers.use('/affirmation', require('./affirmationController'));
apiControllers.use('/jokes', require('./jokesController'));
apiControllers.use('/sendgrid', require('./sendgridController'));

module.exports = apiControllers;
