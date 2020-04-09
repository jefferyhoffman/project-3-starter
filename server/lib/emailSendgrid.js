// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'crumbaliveble@aol.com',
  from: 'ccrum292@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>play exquisite corpse</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai+2|Cormorant+Infant|Poppins|Secular+One&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/9159ad21b3.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">    
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js"></script>            
  </head>
  <body>
    {{!-- need to fix responsiveness of top row nav items --}}
    <div class="container">
      <div class="row topRow">
        <div class="col s12 m6 l6 xl8">
          <h1 class="header"><a class="animated fadeIn slower" href="/">exquisite corpse</a></h1>
        </div>
        <div class="col s12 m3 l3 xl2">
          <h2 class="menu">
            <a class="animated fadeIn slower" href="read">read stories</a>
          </h2>
        </div>
        <div class="col s12 m3 l3 xl2">
          <h2 class="menu">
            <a class="animated fadeIn slower" href="write">play!</a>
          </h2>
        </div>    
      </div>
      {{!-- <div class="container"> 
            {{{ body }}}
            {{!-- <a id="start" href="write">start</a> --}}   
      </div> --}}
    </div>
    
    <script src="assets/js/script.js"></script>
  </body>
  </html>`,
};
sgMail.send(msg)
  .then(() => console.log("Email sent."), err => console.log(err.response.body.errors));
