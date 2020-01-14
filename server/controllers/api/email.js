const router = require('express').Router();
const db = require('../../models');



router.post('/', (req, res) => {
    const message = req.body.message
    const phoneNumber = req.body.phoneNum
    const name = req.body.name
    const email = req.body.email
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: process.env.HIDE_EMAIL,
        from: email,
        subject: `You have message from ${name} sent from your website`,
        text: `${name} sent you the message: ${message}
        Can be contacted at phone number:${phoneNumber} and email: ${email}
        `,
        
    };
    sgMail.send(msg).then((err)=>{
        if(err) console.log(err)
        res.sendStatus(200)
    })
});



module.exports = router;