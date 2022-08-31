import { ContactsTwoTone } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import TeamPokemon from './TeamPokemon.jsx';

const UserTeam = () => {
  // const [pokemonTeam, setPokemonTeam] = useState([]);
  const pokemonTeam = [
    {
      pokemon: 'Charzard',
      hp: 120,
      attack: 50,
      defense: 50,
      spattack: 150,
      spdefense: 100,
      speed: 70,
      type1: 'fire',
      type2: 'water',
      image:
        'https://cdn.shopify.com/s/files/1/1732/7223/products/poke_capture_0004_000_mf_n_00000000_f_n_a93863ab-6462-4ff7-80ce-36eacf4ad0b7_1024x1024.png?v=1646430920',
    },
    {
      pokemon: 'Squirtle',
      hp: 120,
      attack: 50,
      defense: 50,
      spattack: 150,
      spdefense: 100,
      speed: 70,
      type1: 'ghost',
      type2: 'water',
      image: 'https://i.ebayimg.com/images/g/A~wAAOSwqNBiKmGt/s-l500.png',
    },
  ];

  useEffect(() => {
    const getTeamData = async (id) => {};
  }, []);

  return (
    <div id="table-container">
      <table id='teamTable'>
        <thead>
          <tr>
            <td>Pokemon</td>
            <td>Type</td>
            <td>HP</td>
            <td>Attack</td>
            <td>Defense</td>
            <td>Sp. Atk</td>
            <td>Sp. Def</td>
            <td>Speed</td>
          </tr>
        </thead>
        <TeamPokemon pokemonTeam={pokemonTeam} />
      </table>
    
    </div>
  );
};

export default UserTeam;
