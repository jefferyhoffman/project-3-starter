require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (email) => {

   let emailMsg = {
       to: "sarinaburch52@gmail.com",
       from: "sarinaburch52@gmail.com",
       html:
       `<strong>and easy to do anywhere, even with Node.js</strong>`
   }

    sgMail.send(emailMsg)
        .then(() => {
            console.log("Email Sent")
        })
        .catch(err => {
            console.log(err)
        })
}