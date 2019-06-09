const drinksController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

// -------------------------------------------------------------------
// DRINKS
// -------------------------------------------------------------------

// CREATE
drinksController.post('/', JWTVerifier, function (req, res) {
  const { user } = req;

  db.Drinks.create(req.body)
    .then(function (dbDrink) {
      user.drinks.push(dbDrink._id);
      return user.save();
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// READ
drinksController.get('/', (req, res) => {
  db.Drinks
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// SEARCH
drinksController.get('/search', function (req, res) {
  const searchTerm = req.query.name;
  db.Drinks
    .find({ name: new RegExp(`.*${searchTerm}.*`) })
    .then(dbModel => {
      // console.log(dbModel)
      res.json(dbModel)
    })
    .catch(err => res.status(422).json(err));
});

 // example search in database for partial name with 'Old'
  // db.getCollection('drinks').find({'name': {$regex: '.*Old.*'}})

// drinksController.get('/ingredient', function (req, res) {
//   const searchTerm = req.query.ingredients_measurements;
//   db.Drinks
//     .find({ ingredients_measurements: new RegExp(`.*${searchTerm}.*`) })
//     .then(dbModel => {
//       console.log(dbModel)
//       res.json(dbModel)
//     })
//     .catch(err => res.status(422).json(err));
// });

// UPDATE
drinksController.put('/:id', JWTVerifier, (req, res) => {
  db.Drinks
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// DELETE
drinksController.delete('/:id', JWTVerifier, (req, res) => {
  db.Drinks
    .findByIdAndDelete({ _id: req.params.id })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// -------------------------------------------------------------------
// MY DRINKS
// -------------------------------------------------------------------

// READ
drinksController.get('/mine', JWTVerifier, function (req, res) {
  db.Users.findOne({ _id: req.user._id })
    .populate('drinks')
    .then(function (dbUser) {
      res.json(dbUser.drinks);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// DELETE
drinksController.delete('/mine/:id', JWTVerifier, (req, res) => {
  const { user } = req;
  user.drinks.pull(req.params.id);
  user.save()
    .then(dbUser => res.json(dbUser))
    .catch(err => res.json(err));
});

module.exports = drinksController;









// const drinksController = require('express').Router();
// const db = require('../../models')

// const { JWTVerifier } = require('../../lib/passport');

// drinksController.get('/', (req, res) => {
//   db.Drinks
//   .find(req.query)
//   .then(dbModel => {
//     // console.log(dbModel)
//     res.json(dbModel)})
//   .catch(err => res.status(422).json(err));
// });

// // drinksController.get('/mine', JWTVerifier, (req, res) => {
// //   db.Users.find({ _id: req.user._id })
// //   // .find(req.query)
// //   .then(dbModel => {
// //     console.log(dbModel)
// //     res.json(dbModel)})
// //   .catch(err => res.status(422).json(err));
// // });
//   drinksController.get('/search', JWTVerifier, function(req, res) {
//     searchTerm = req.query.name
//     db.Drinks
//     .find({name: new RegExp(`.*${searchTerm}.*`)})
//     .then(dbModel => {
//       // console.log(dbModel)
//       res.json(dbModel)})
//     .catch(err => res.status(422).json(err));
  
  
//   });

// drinksController.get('/mine', JWTVerifier, function (req, res) {
//   db.Users.find({ _id: req.user._id })
//     .populate('drinks')
//     .then(function (dbUser) {
//       res.json(dbUser[0].drinks);
//     })
//     .catch(function (err) {
//       res.json(err);
//     });
// });

// drinksController.delete('/mine/:id', JWTVerifier, (req, res) => {
//   db.Users.findOneAndUpdate({ _id: req.user._id }, { $pull: { drinks: { _id: req.params._id } } }, { new: true })
//   .then(dbModel => res.json(dbModel))
//   .catch(err => console.log(err));
// });




// // drinksController.post('/', JWTVerifier, (req, res) => {
// //   db.Drinks
// //   .create(req.body)
// //   .then(dbModel => res.json(dbModel))
// //   .catch(err => console.log(err));

// // });

// drinksController.post('/', JWTVerifier, function (req, res) {
//   db.Drinks.create(req.body)
//     .then(function (dbDrink) {
//       return db.Users.findOneAndUpdate({ _id: req.user._id }, { $push: { drinks: dbDrink._id } }, { new: true });
//     })
//     .then(function (dbUser) {
//       res.json(dbUser);
//     })
//     .catch(function (err) {
//       res.json(err);
//     });
// });

// drinksController.put('/:id', JWTVerifier, (req, res) => {
//   db.Drinks
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));

// });

// drinksController.delete('/:id', JWTVerifier, (req, res) => {
//   db.Drinks
//     .findById({ _id: req.params.id })
//     .then(dbModel => dbModel.delete.res.end())
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });



// module.exports = drinksController;






