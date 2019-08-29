const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const db = require('../models');

var JWT_STRATEGY_OPTS = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(JWT_STRATEGY_OPTS, function (jwtPayload, done) {
    db.Users.findOne({ where: { id: jwtPayload.sub } })
      .then(user => done(null, user || false))
      .catch(err => done(err, false));
  })
);

const JWTVerifier = passport.authenticate('jwt', { session: false });

module.exports = {
  passport,
  JWTVerifier
};
