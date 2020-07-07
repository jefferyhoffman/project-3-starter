const usersController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const jwt = require("jsonwebtoken");

module.exports = usersController => {

  // Route to create a new user
  usersController.post("/", (req, res) => {
    const { email, password, firstName, lastName, username } = req.body;

    db.User.create({ email, password, firstName, lastName, username })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });

  // Route to get the user's information
  usersController.get("/", JWTVerifier, (req, res) => {
    res.json(req.user);
  });

  // Route to login the user
  usersController.post("/login", (req, res) => {
    const { email, password } = req.body;

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

}
