const secretsController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

// Accessed at /api/secrets
// secretsController.get('/', JWTVerifier, (req, res) => res.json(SECRETS));

secretsController.get('/', JWTVerifier, (req, res) => {

  db.Secrets.find({})
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      if (error) throw error
    })
})

secretsController.post('/',((req, res)=>{
  db.Secrets.create({}).then(()=>res.sendStatus(200)).catch(err => res.status(500).json(err))
}))


module.exports = secretsController;
