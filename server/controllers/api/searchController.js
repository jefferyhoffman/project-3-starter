const drinksController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

drinksController.get('/', (req, res) => {
    db.drinks.find({$where: {category: 'cocktail', 
    kind: 'alcoholic', name: new RegExp(`.*${searchTerm}*.`)}})
    .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)})
  .catch(err => res.status(422).json(err));
});

drinksController.get("/", JWTVerifier, function(req, res) {
    db.drinks.find({_id: req.user._id})
      .populate("drinks")
      .catch(function(err) {
        res.json(err);
      });
  });  

module.exports = drinksController;

