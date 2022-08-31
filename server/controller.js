const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const db = new Pool({
  connectionString: process.env.DB_URI
});

const controller = {};

// function getPokemonData (name) => const result = axios.get('urlshit.com/${name}) => setPokemon(result)

controller.addPokemon = async (req, res, next) => {
  try {
    const { 
      pokemon,
      image,
      type1,
      type2,
      hp,
      attack,
      defense,
      spattack,
      spdefense,
      speed 
    } = req.body
    
    // const {userId} = req.cookies
    const query = `INSERT into teams (userId, pokemon, image, type1, type2, hp, attack, speed, defense, spattack, spdefense) VALUES (2, '${pokemon}', '${image}', '${type1}', '${type2}', ${hp}, ${attack}, ${speed}, ${defense}, ${spattack}, ${spdefense}) RETURNING *`;
    const result = await db.query(query);
    res.locals.addedPokemon = result.rows[0];
    return next();
  } catch(err) {
    next ({
    log: err,
    status: 501,
    message: {
        err: `Error has occured while adding Pokemon.`,
    },
  });
  }
}


controller.removePokemon = async ( req, res, next ) => {
  try{
    const { name } = req.body;
    const {userId} = req.cookies;
    const query = `DELETE from teams WHERE userId = ${userId} AND pokemon = '${name}'`;
    await db.query(query);
    return next();
  }catch (err) {
    next ({
    log: err,
    status: 501,
    message: {
        err: `Error has occured while removing Pokemon.`,
    },
  });    
  }
}

controller.getPokemon = async( req, res, next ) => {
  try{
    const { userId } = req.cookies;
    const query = `SELECT pokemon from teams WHERE userId = ${userId}`;
    const result = await db.query(query);
    res.locals.Pokemons = result.rows;
    return next();
  }catch (err) {
    next ({
    log: err,
    status: 501,
    message: {
        err: `Error has occured while retrieving Pokemons.`,
    },
  });    
  }
}

module.exports = controller;