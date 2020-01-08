const newCardController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');



newCardController.post('/newcardinfos', JWTVerifier, (req, res) => {
  const { newname, company, newemail, website, phonenumber } = req.body;
  console.log(newname, company, newemail, website, phonenumber, "<====================================")
  db.Newcardinfo.create({ newname, company, newemail, website, phonenumber, UserId: req.user.id })
  .then(user => res.json(user))
  .catch(err => res.json(err));
});

newCardController.get('/mycards', JWTVerifier, (req, res) => {
  db.Newcardinfo.findAll({
    where:{
      UserId: req.user.id
    }
  })
    .then(cards => res.json(cards))
    .catch(err => console.log(err))
});

module.exports = newCardController;