const express = require('express');
const controller = require('./controller');
const router = express.Router();
const passport = require('passport');
require('./authRouter');
//route for logging in via OAuth -> saving user data in user db
router.get(
  '/google',
  passport.authentication('google', { scope: ['email', 'profile'] })
);
//route saving Pokemon data in teams db
router.post('/addToTeam', controller.addPokemon, (req, res) => {
  return res.status(200).json(res.locals.addedPokemon);
});
//route delete Pokemon data from teams db
router.delete('/removeFromTeam', controller.removePokemon, (req, res) => {
  res.sendStatus(200);
});

//route to retrieve all Pokemon data from a specific userID in teams db
router.get('/getTeam/:userId', controller.getPokemon, (req, res) => {
  return res.status(200).json(res.locals.Pokemons);
});

module.exports = router;
