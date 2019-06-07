const checkoutController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

checkoutController.get('/services', JWTVerifier, (req, res) => {
    db.Services.find({id:req.user._id}).then(services => {
        res.json(services);
    })
});

checkoutController.post('/', JWTVerifier, (req, res) => {
    console.log(req.user);
    const allServices = []
    req.body.services.forEach(service => {
        allServices.push(
            db.Services.create({
                name: service.title,
                cost: service.price,
                date: req.body.date,
                id: req.user._id
            })
        );
    });
    Promise.all(allServices).then(results => {
        res.json(results)
    })
        .catch(err => console.log(err))
    //req.body data structure
    //     { date: '2019-06-14T04:00:00.000Z',
    //       services: [ { id: 1, title: 'Premium Package', price: 350 } ] }
    // db.Services.create({ date, cost, name })
    //     .then(service => res.json(service))
    //     .catch(err => console.log(err));
});

module.exports = checkoutController;