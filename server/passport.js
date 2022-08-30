const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const db = new Pool({
  connectionString: process.env.DB_URI
});

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    try {
      const result = db.query(`INSERT IGNORE into users (email) VALUES ()`)
    } catch (err) {
      next ({
      log: err,
      status: 501,
      message: {
          err: `Error has occured while logging in with Google OAuth.`,
      },
    });  
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((user, done) => {
  done(null, user.id)
})