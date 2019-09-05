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
        (err,response)=>{
            if(err) console.log(err)
            const msg = {
                to: 'demartins37@yahoo.com',
                from: 'demartins37@yahoo.com',
                subject: 'Sending with Twilio SendGrid is Fun',
                text: `${customerInfo.name, customerInfo.email} has contacted you with this message ${customerInfo.message}`,
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
              };
              sgMail.send(msg);

        }
    )
})
module.exports = krystalControllers;