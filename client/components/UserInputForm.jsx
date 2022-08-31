import React from 'react';
import axios from 'axios';

const UserInputForm = props => {
  const { setpokemonOneDesc, setPokemonOne } = props;
  
  const onSubmit = async () => {
    const pokemonName = document.querySelector('#userInput').value;
    try{
      const results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if(results) {
        const pokemonOneStats = {
          name: pokemonName,
          hp: results.data.stats[0].base_stat, 
          attack: results.data.stats[1].base_stat,
          defense:results.data.stats[2].base_stat, 
          spattack: results.data.stats[3].base_stat, 
          spdefense: results.data.stats[4].base_stat, 
          speed: results.data.stats[5].base_stat, 
          type1: results.data.types[0].type.name, 
          type2: results.data.types[1]?.type.name || null, 
          image: results.data.sprites.front_default  
        }
        setPokemonOne(pokemonOneStats);
      }      
      const desc = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
      if(desc) {
        setpokemonOneDesc(desc.data.flavor_text_entries[0].flavor_text)
      }
    } catch(err){
      console.log('Pokemon API Error', err);
      alert('The pokemon you entered does not exist!');
    }
  }

  const userInput = input => console.log(input);

  return(
    <div className="displayBox">
      <input placeholder='Enter pokemon here...' type="text" id="userInput"/>
      <button onClick={() => onSubmit()}>Search</button>
    </div>
  );
};

export default UserInputForm;