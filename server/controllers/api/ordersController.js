const ordersController = require('express').Router();
const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

//uses middle to verify the user
ordersController.get('/', JWTVerifier, (req, res) => {
    res.json(req.user);
  });
   

ordersController.post('/checkout', (req, res) => {
  const {name, total} = req.body;
  db.Orders
})
module.exports = ordersController;

