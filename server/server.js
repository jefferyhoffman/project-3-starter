/**
 * Project 3 Starter
 * UNC Charlotte Full-Stack Coding Bootcamp
 */

//-- .env --------------------------------------------------------------------
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

//-- Dependencies ------------------------------------------------------------
const express = require('express');
const logger = require('morgan');

const { passport } = require('./lib/passport');

//-- Constants ---------------------------------------------------------------
const PORT = process.env.PORT || 3001;
const LOG_MODE = process.env.NODE_ENV === 'production' ? 'common' : 'dev';

//-- Express -----------------------------------------------------------------
const app = express();

//-- Middleware --------------------------------------------------------------
app.use(logger(LOG_MODE));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

//-- Static Server (Production) ----------------------------------------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

//-- Controller Routes -------------------------------------------------------
app.use(require('./controllers'));

//-- Main --------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}...`);
});

//-- Export to Tests ---------------------------------------------------------
module.exports = app;
