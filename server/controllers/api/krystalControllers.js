const db = require("../../models");
const krystalControllers = require('express').Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


krystalControllers.post("/", (req, res) => {
    customerInfo = req.body

    customerInfo.date_contacted = Date.now()
    customerInfo.service_notes = ""
    customerInfo.products_used = ""
    console.log(customerInfo,"<===")
    db.Customers.create({...customerInfo}).then(
        (response)=>{
            
            const msg = {
                to: 'demartins37@yahoo.com',
                from: customerInfo.email,
                subject: 'Project 3 Test Form has been Submitted',
                text: 'test',
                html: `<strong>${customerInfo.name}, has contacted you with this message ${customerInfo.message}</strong>`,
              };
               sgMail.send(msg);
              console.log(response)
              res.json({'status':'sucess'})
            
        }
    ).catch((err)=>console.log(err))
})

krystalControllers.post("/makeNew", (req, res) => {
    CustomerStuff = req.body
    db.Customers.create({...CustomerStuff}).then(
        console.log("done")
    )
})

krystalControllers.get("/viewcustomer/", (req, res) =>{
    db.Customers.find({}).then(
        (response) => {
            res.json(response)
        }
    )
})

krystalControllers.get("/find/:id", (req, res) =>{ console.log(req.params.id)
    db.Customers.findOne({ _id: req.params.id })
        .then((response) => {
            console.log(response)
            res.json(response)
        })
})

krystalControllers.put("/addnote/:id", (req, res) => {
    console.log("add note funciton working ===============")
    db.Customers.updateOne({_id: req.params.id}, {$set: {service_notes: req.params.text}})
    .then((response) => {
        // idk what goes in here yet
    })
})

krystalControllers.put("/deletenote/:id", (req, res) => {
    console.log("delete note funciton working ==============")
    db.Customers.updateOne({_id: req.params.id}, {$set: {service_notes: ''}})
    .then((response) => {

    })
})

krystalControllers.put("/makeInactive/:id", (req, res) => {
    console.log("make inactive function working ==========")
    db.Customers.updateOne({_id: req.params.id}, {$set: {active: false}})
    then((response) => {
        
    })
})

module.exports = krystalControllers;