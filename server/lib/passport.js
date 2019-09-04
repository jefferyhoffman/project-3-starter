const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const db = require('../models');

var JWT_STRATEGY_OPTS = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'secret',
};

passport.use(
  new JwtStrategy(JWT_STRATEGY_OPTS, function (jwtPayload, done) {
<<<<<<< HEAD
    db.Users.findOne({ _id: jwtPayload.sub })
=======
    db.Users.findOne({ where: { id: jwtPayload.sub } })
>>>>>>> f301839dcf1d16d5fbc4a8839159329733407dfe
      .then(user => done(null, user || false))
      .catch(err => done(err, false));
  })
);

const JWTVerifier = passport.authenticate('jwt', { session: false });

module.exports = {
  passport,
  JWTVerifier
};
