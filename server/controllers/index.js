const controllers = require('express').Router();

const apiControllers = require('./api');

controllers.use('/api', apiControllers);

module.exports = controllers;
