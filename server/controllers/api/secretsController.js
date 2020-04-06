const secretsController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

secretsController.post('/', (req, res) => {
 

  db.Secrets.create({})
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

secretsController.get('/', JWTVerifier, (req, res) => {

  db.Secrets.find({})
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      if (error) throw error
    })
})

module.exports = secretsController;