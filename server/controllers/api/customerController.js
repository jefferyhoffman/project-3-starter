const db = require("../../models")
const customerController = require('express').Router();

customerController.put("/name/:id" , (req, res) => {
    db.Customers.updateOne({_id: req.params.id}, {$set: {name: req.body.name}})
    .then((response) => {
        res.json(response)
    })
    .catch((err) =>{
        console.log(err);
    })
})

module.exports = customerController;