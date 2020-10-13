const secretsController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');
const sendGrid = require('../../lib/sendGrid')
secretsController.get('/', JWTVerifier, (req, res) => {

  db.Secrets.find({})
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      if (error) throw error
    })
})

secretsController.get('/send', (req, res)=>{
  sendGrid("bob")
  res.sendStatus('200')
})
module.exports = secretsController;