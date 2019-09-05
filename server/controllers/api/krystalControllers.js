const db = require("../../models")
const krystalControllers = require('express').Router();


krystalControllers.post("/", (req, res) => {
    customerInfo = req.body

    customerInfo.date_contacted = Date.now()
    customerInfo.service_notes = ""
    customerInfo.products_used = ""
    console.log(customerInfo,"<===")
    db.Customers.create({customerInfo}).then(
        (err,response)=>{
            if(err) console.log(err)
            console.log(response)
        }
    )
})
module.exports = krystalControllers;