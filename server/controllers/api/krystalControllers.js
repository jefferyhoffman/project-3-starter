const db = require("../../models")
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

krystalControllers.get("/viewcustomer/", (req, res) =>{
    db.Customers.find({}).then(
        (response) => {
            res.json(response)
        }
    )
})
module.exports = krystalControllers;