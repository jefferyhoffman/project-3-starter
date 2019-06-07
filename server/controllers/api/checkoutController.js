const checkoutController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

// checkoutController.get('/me', JWTVerifier, (req, res) => {
//     res.json(req.user);
// });

checkoutController.post('/', JWTVerifier, (req, res) => {
    console.log(req.body)
    const { date, cost, id, services, complete } = req.body;
    db.Services.create({ date, cost, id, services, complete })
        .then(service => res.json(service))
        .catch(err => console.log(err));
});

module.exports = checkoutController;