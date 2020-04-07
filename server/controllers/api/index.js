const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));

module.exports = apiControllers;


module.exports = {
    Board : require('../../models/board')
}
