import React from 'react';
import Picture from '../components/Picture.jsx'
import Stats from '../components/Stats.jsx'
import CompareForm from '../components/CompareForm.jsx'
import Types from '../components/Types.jsx'


try{
    const pokemonName = document.querySelector('#userInput').value
    console.log('PokemonName', pokemonName)
    let results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    console.log('results', results)
    if(results) {
      results = results.data
      const pokemonOneStats = {
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
      setPokemonOne(pokemonOneStats)
    }
const compare = props => {

  return (
    <>
    <div className="picure-display">
        <Picture />
        <Picture />
    </div>
    return (
    <div id="table-container">
      <table id='teamTable'>
        <thead>
          <tr>
            <th>Stats</th>
            <th>{PokemonOne.name}</th>
            <th>{PokemonTwo.name}</th>    
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hp</td>
            <td>{PokemonOne.hp}</td>
            <td>{PokemonTwo.hp}</td>
          </tr>
          <tr>
            <td>attack</td>
            <td>{PokemonOne.attack}</td>
            <td>{PokemonTwo.attack}</td>
          </tr>
          <tr>
            <td>defense</td>
            <td>{PokemonOne.defense}</td>
            <td>{PokemonTwo.defense}</td>
          </tr>
          <tr>
            <td>special attack</td>
            <td>{PokemonOne.spattack}</td>
            <td>{PokemonTwo.spattack}</td>
          </tr>
          <tr>
            <td>special defense</td>
            <td>{PokemonOne.spdefense}</td>
            <td>{PokemonTwo.spdefense}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{PokemonOne.speed}</td>
            <td>{PokemonTwo.speed}</td>
          </tr>
          <tr>
            <td>type 1</td>
            <td>{PokemonOne.type1}</td>
            <td>{PokemonTwo.type1}</td>
          </tr>
          <tr>
            <td>type 2</td>
            <td>{PokemonOne.type2}</td>
            <td>{PokemonTwo.type2}</td>
          </tr>
        </tbody>
        <TeamPokemon pokemonTeam={pokemonTeam} />
      </table>
    
    </div>
  );
    <div className="compare-form">
        <CompareForm />
    </div>
 
   </> 
  )
  
}


export default compare;