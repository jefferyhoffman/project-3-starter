const newCardController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');



newCardController.post('/newcardinfos', (req, res) => {
  const { newname, company, newemail, website, phonenumber } = req.body;
  console.log(newname, company, newemail, website, phonenumber, "<====================================")
  db.Newcardinfo.create({ newname, company, newemail, website, phonenumber })
  .then(user => res.json(user))
  .catch(err => res.json(err));
});

newCardController.get('/mycards', (req, res) => {
  res.json(req.newcardinfo);
});

module.exports = newCardController;