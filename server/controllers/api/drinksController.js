const drinksController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

drinksController.get('/', (req, res) => {
  db.Drinks
  .find(req.query)
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)})
  .catch(err => res.status(422).json(err));
});

drinksController.get('/mine', JWTVerifier, (req, res) => {
  db.Drinks.find({ _id: req.user._id })
  // .find(req.query)
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)})
  .catch(err => res.status(422).json(err));
});



drinksController.post('/', JWTVerifier, (req, res) => {
  db.Drinks
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => console.log(err));
  
});

drinksController.put('/:id', JWTVerifier, (req, res) => {
  db.Drinks
  .findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));

});

drinksController.delete('/:id', JWTVerifier, (req, res) => {
  db.Drinks
  .findById({ _id: req.params.id })
  .then(dbModel => dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});

module.exports = drinksController;






