const serviceController = require('express').Router();

const db = require('../../models');
const {JWTVerifier } = require = ('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.get('/me', JWTVerifier,(req, res) => {
res.json(req.user);
});


