// /**
//  * Project 3 Starter
//  * UNC Charlotte Full-Stack Coding Bootcamp
//  */

// //-- .env --------------------------------------------------------------------
// const path = require('path');
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config({
//     path: path.resolve(__dirname, '.env')
//   });
// }

// //-- Dependencies ------------------------------------------------------------
// const express = require('express');
// const logger = require('morgan');

// const { passport } = require('./lib/passport');

// //-- Constants ---------------------------------------------------------------
// const PORT = process.env.PORT || 3001;
// const LOG_MODE = process.env.NODE_ENV === 'production' ? 'common' : 'dev';

// //-- Express -----------------------------------------------------------------
// const app = express();

// //-- Middleware --------------------------------------------------------------
// app.use(logger(LOG_MODE));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(passport.initialize());

// //-- Static Server (Production) ----------------------------------------------
// if (process.env.NODE_ENV === 'production') {
//   const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
//   console.log(`Client build path: ${clientBuildPath}\n`);
//   app.use(express.static(clientBuildPath));
// }

// //-- Controller Routes -------------------------------------------------------
// app.use(require('./controllers'));

// //-- React catch-all ---------------------------------------------------------
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// //-- Main --------------------------------------------------------------------
// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on port ${PORT}...`);
// });

// //-- Export to Tests ---------------------------------------------------------
// module.exports = app;



const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute =
  'mongodb://<your-db-username-here>:<your-db-password-here>@ds249583.mlab.com:49583/fullstack_app';
// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(boddyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(logger('dev'));


router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if(err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data })
  });
});


router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.send(err);
    return res.json({ success:true });
  });
});

router.delete('./deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});


router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, message } = req.body;
})