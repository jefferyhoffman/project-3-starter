const secretsController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

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
  db.Secrets.create({}).then(results =>res.sendStatus(200))
}))
module.exports = secretsController; 