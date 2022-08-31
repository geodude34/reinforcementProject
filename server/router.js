const express = require('express');
const controller = require('./controller');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const db = new Pool({
  connectionString: process.env.DB_URI,
});

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const result = await db.query(
          `SELECT * FROM users WHERE email ='${profile.email}'`
        );
        if (!result.rows.length) {
          const newUser = await db.query(
            `INSERT INTO users (email) VALUES ('${profile.email}') RETURNING *`
          );
          console.log(newUser);
          return done(null, newUser.rows[0]);
        } else {
          return done(null, result.rows[0]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google'),
  controller.setCookie,
  (req, res) => {
    return res.redirect('http://localhost:8080/home');
  }
);
//route saving Pokemon data in teams db
router.post('/addToTeam', controller.addPokemon, (req, res) => {
  return res.status(200).json(res.locals.addedPokemon);
});
//route delete Pokemon data from teams db
router.delete(
  '/removeFromTeam',
  controller.removePokemon,
  controller.getPokemon,
  (req, res) => {
    return res.status(200).json(res.locals.Pokemons);
  }
);

//route to retrieve all Pokemon data from a specific userID in teams db
router.get('/getTeam/:userId', controller.getPokemon, (req, res) => {
  return res.status(200).json(res.locals.Pokemons);
});

module.exports = router;
