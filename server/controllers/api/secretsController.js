const secretsController = require('express').Router();

const { JWTVerifier } = require('../../lib/passport');

const SECRETS = [
  {
    id: 1,
    message: 'The clock rings twice on midnight when the moon is full.'
  }
];

// Accessed at /api/secrets
secretsController.get('/', JWTVerifier, (req, res) => res.json(SECRETS));

module.exports = secretsController;
