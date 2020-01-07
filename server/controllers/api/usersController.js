const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.post('/', (req, res) => {
  const { email, password, name } = req.body;
  console.log(name)
  db.User.create({ email, password, name })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/LoginPage', (req, res) => {
  const { email, password } = req.body;
  console.log(email)

  db.User.findOne({ where: { email } })
    .then(user => {
      if (!user || !user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }

      res.json({
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
        user
      });
    });
});

usersController.post('/Studio', (req, res) => {
  const { newname, company, newemail, website, phonenumber } = req.body;
  db.Newcardinfos.create({ newname, company, newemail, website, phonenumber })
  .then(user => res.json(user))
  .catch(err => res.json(err));
})

module.exports = usersController;
