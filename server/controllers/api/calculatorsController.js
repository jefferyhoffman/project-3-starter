const secretsController = require('express').Router();

const { JWTVerifier } = require('../../lib/passport');
const db = require('../../models');

Controller.get('/', JWTVerifier, (req, res) => {
  db.Calculator.findAll()
    .then(calulators => res.json(secrets))
    .catch(err => console.log(err));
});

module.exports = calculatorsController;