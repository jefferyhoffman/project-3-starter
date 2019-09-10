const db = require("../../models")
const customerController = require('express').Router();

customerController.put("/name/:id" , (req, res) => {
    console.log(req.body)
    db.Customers.updateOne({_id: req.params.id}, {$set: {name: req.body.name}})
    .then((response) => {
        console.log(response);
        res.json(res)
    })
    .catch((err) =>{
        console.log(err);
    })
})

module.exports = customerController;