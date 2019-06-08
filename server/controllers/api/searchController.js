const drinksController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

// Search in database for partial name with 'Old'

drinksController.get('/search', JWTVerifier, function(req, res) {
  db.getCollection('drinks').find({'name': {$regex: '.*Old.*'}})
    .populate('drinks')
    .catch(function(err) {
      res.json(err);
    });
});

// Search in database with category

drinksController.get('/search', JWTVerifier, function(req, res) {
  db.getCollection('drinks').find({category: 'cocktail'})
    .populate('drinks')
    .catch(function(err) {
      res.json(err);
    });
});

// Search in database with kind

drinksController.get('/search', JWTVerifier, function(req, res) {
  db.getCollection('drinks').find({kind: 'Non-alcoholic'})
    .populate('drinks')
    .catch(function(err) {
      res.json(err);
    });
});

// Search by drink id

drinksController.get('/', JWTVerifier, function(req, res) {
    db.getCollection('drinks').find({_id: req.drink._id})
      .populate('drinks')
      .catch(function(err) {
        res.json(err);
      });
  });  

// drinksController.get('/', (req, res) => {
//     db.drinks.find({$where: {category: 'cocktail', 
//     kind: 'alcoholic', name: new RegExp(`.*${searchTerm}*.`)}})
//     .then(dbModel => {
//     console.log(dbModel)
//     res.json(dbModel)})
//   .catch(err => res.status(422).json(err));
// });

// drinksController.get('/', JWTVerifier, function(req, res) {
//     db.drinks.find({_id: req.user._id})
//       .populate('drinks')
//       .catch(function(err) {
//         res.json(err);
//       });
//   });  



module.exports = drinksController;

