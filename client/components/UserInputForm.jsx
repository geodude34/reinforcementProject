import React from 'react';
import { useState } from 'react';

const UserInputForm = props => {

  const [pokemonOne, setPokemonOne] = useState();
  const [pokemonTwo, setPokemonTwo] = useState();

  const onSubmit = async () => {
    try{
      const pokemonName = document.querySelector('#userInput').value
      console.log('PokemonName', pokemonName)
      let results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      console.log('results', results)
      if(results) {
        results = results.data
        const pokemonStats = {
          name: pokemonName,
          hp: results.stats[0].base_stat, 
          attack: results.stats[1].base_stat,
          defense:results.stats[2].base_stat, 
          spattack: results.stats[3].base_stat, 
          spdefense: results.stats[4].base_stat, 
          speed: results.stats[5].base_stat, 
          type1: results.types[0].type.name, 
          type2: results.types[1]?.type.name || null, 
          image: results.sprites.front_default  
        }
        console.log(pokemonOneStats)
      }
      
    } catch(err){
      console.log('Pokemon API Error', err)
    }

  }

  return(
  <div className="displayBox">
    <input placeholder='Enter pokemon here...' type="text" id="userInput"/>
    <button onClick={() => onSubmit()}>Search</button>
    </div>
  );
};

export default UserInputForm;