import React from 'react';
import axios from 'axios';


const TeamPokemon = ({ pokemonTeam, setPokemonteam }) => {

  const handleRemoveClick = async({target}) => {
    try {
      const response = await axios.delete('/removeFromTeam', {name: target.name} )
      if(response.statusCode = 200) {
        setPokemonteam(response.data)
      }
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <tbody>
      {pokemonTeam.map((pokemon, idx) => (
        <tr key={idx}>
          <td>
            <img
              style={{
                width: '100px',
                height: '100px',
                display: 'block',
                padding: '10px',
              }}
              src={pokemon.image}
            />
            {pokemon.pokemon}
            <button onClick={() => handleRemoveClick()} id='removeFromTeam' name={pokemon.pokemon}>Remove</button>
          </td>
          <td>
            <span className={`${pokemon.type1} type`}>{pokemon.type1}</span>
            <br></br>
            <br></br>
            {pokemon.type2 && (
              <span className={`${pokemon.type2} type type2`}>{pokemon.type2}</span>
            )}
          </td>
          <td>{pokemon.hp}</td>
          <td>{pokemon.attack}</td>
          <td>{pokemon.defense}</td>
          <td>{pokemon.spattack}</td>
          <td>{pokemon.spdefense}</td>
          <td>{pokemon.speed}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TeamPokemon;
