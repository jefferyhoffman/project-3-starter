const checkoutController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

// checkoutController.get('/me', JWTVerifier, (req, res) => {
//     res.json(req.user);
// });

checkoutController.post('/', (req, res) => {
    const { date, cost, id, services, complete } = req.body;
    db.Services.create({ date, cost, id, services, complete })
        .then(service => res.json(service))
        .catch(err => res.json(err));
});

module.exports = checkoutController;