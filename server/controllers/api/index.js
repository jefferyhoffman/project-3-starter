const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/events', require('./eventsController'));
apiControllers.use('/posts', require('./postsController'));
apiControllers.use('/profiles', require('./profilesController'));

module.exports = apiControllers;
