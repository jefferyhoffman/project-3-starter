const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');
const Product = require('../../models/product');

usersController.post('/', (req, res) => {
  const { email, password } = req.body;

  db.Users.create({ email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

usersController.get('/me', JWTVerifier, (req, res) => {
  db.Users.findOne({ _id: req.user._id })
    .populate("cart.product")
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.Users.findOne({ email })
    .then(user => {
      if (!user || !user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }

      res.json({
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
        user
      });
    });
});

usersController.put('/me/cart', JWTVerifier, (req, res) => {
  console.log(req.body);
  db.Users.update({ _id: req.user._id }, { $push: { cart: req.body } })
    .then(data => {
      res.json(data);
    })
})

usersController.put('/me/cart/remove', JWTVerifier, (req, res) => {
  console.log(req.user._id)
  console.log(req.body)
  db.Users.findOneAndUpdate(
    { _id: req.user._id },
    { $pull: { cart:  {_id: req.body._id}  } },
    {new: true}
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err)
    });
});

module.exports = usersController;
