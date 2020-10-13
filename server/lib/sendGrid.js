require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey (process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY, '<==')

module.exports = (email) => {
    email= "myspamgoesher3@gmail.com"
   let emailMsg = {
       to: email,
       subject:"test",
       from: "sarinaburch52@gmail.com",
       html:
       `<strong>and easy to do anywhere, even with Node.js</strong>`
   }
   console.log(emailMsg)
    sgMail.send(emailMsg)
        .then(() => {
            console.log("Email Sent")
        })
        .catch(err => {
            console.log(err)
            console.log(err.response.body)
        })
}