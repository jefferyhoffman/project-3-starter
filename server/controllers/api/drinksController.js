const drinksController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

drinksController.get('/', (req, res) => {
  db.Drinks
  .find(req.query)
  .then(dbModel => {
    // console.log(dbModel)
    res.json(dbModel)})
  .catch(err => res.status(422).json(err));
});

// drinksController.get('/mine', JWTVerifier, (req, res) => {
//   db.Users.find({ _id: req.user._id })
//   // .find(req.query)
//   .then(dbModel => {
//     console.log(dbModel)
//     res.json(dbModel)})
//   .catch(err => res.status(422).json(err));
// });
  drinksController.get("/search", JWTVerifier, function(req, res) {
    searchTerm = req.query.name
    db.Drinks
    .find({name: new RegExp(`.*${searchTerm}.*`)})
    .then(dbModel => {
      // console.log(dbModel)
      res.json(dbModel)})
    .catch(err => res.status(422).json(err));
  
  
  });

drinksController.get("/mine", JWTVerifier, function (req, res) {
  db.Users.find({ _id: req.user._id })
    .populate("drinks")
    .then(function (dbUser) {
      res.json(dbUser[0].drinks);
    })
    .catch(function (err) {
      res.json(err);
    });
});

drinksController.delete("/mine/:id", JWTVerifier, (req, res) => {
  db.Users.findOneAndUpdate({ _id: req.user._id }, { $pull: { drinks: { _id: req.params._id } } }, { new: true })
  .then(dbModel => res.json(dbModel))
  .catch(err => console.log(err));
});




// drinksController.post('/', JWTVerifier, (req, res) => {
//   db.Drinks
//   .create(req.body)
//   .then(dbModel => res.json(dbModel))
//   .catch(err => console.log(err));

// });

drinksController.post("/", JWTVerifier, function (req, res) {
  db.Drinks.create(req.body)
    .then(function (dbDrink) {
      return db.Users.findOneAndUpdate({ _id: req.user._id }, { $push: { drinks: dbDrink._id } }, { new: true });
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
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
    .then(dbModel => dbModel.delete.res.end())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});



module.exports = drinksController;






