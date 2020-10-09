const sendgridController = require('express').Router();
const axios = require("axios");
const sendGrid = require("../../lib/sendGrid")

sendgridController.post('/', (req, res) => {
  sendGrid(req.body.email)
})

module.exports = sendgridController;