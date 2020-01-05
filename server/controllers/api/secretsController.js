const secretsController = require('express').Router();

const { JWTVerifier } = require('../../lib/passport');
const db = require('../../models');

secretsController.get('/', JWTVerifier, (req, res) => {
  db.Secret.findAll()
    .then(secrets => res.json(secrets))
    .catch(err => console.log(err));
});

module.exports = secretsController;