// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'crumbaliveble@aol.com',
  from: 'ccrum292@gmail.com',
  subject: 'Smaller Footprint',
  html: `
    <div>
      <h1>
    


    </div>`
,
};
sgMail.send(msg)
  .then(() => console.log("Email sent."), err => console.log(err.response.body.errors));
