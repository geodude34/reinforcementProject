import Description from '../components/Description.jsx';
import Picture from '../components/Picture.jsx'
import Stats from '../components/Stats.jsx'
import UserInputForm from '../components/UserInputForm.jsx'
import React, {useEffect} from 'react';
import axios from 'axios';

const SearchContainer = (props) =>{
  const { pokemonOneDesc, setpokemonOneDesc, pokemonOne, setPokemonOne } = props;
  const dummyPokemon = {
    name: 'Darin',
    image: 'https://www.kotaku.com.au/wp-content/uploads/sites/3/2020/04/fake-pokemon-whale.jpg?quality=80&w=1280',
    type1: 'Rock',
    type2: 'Water',
    hp: 69,
    attack: 69,
    defense: 69,
    spattack: 69,
    spdefense: 69,
    speed: 69,
  }

  useEffect(() => {
    console.log(pokemonOneDesc);
    console.log(pokemonOne);
    console.log(dummyPokemon);
  }, [pokemonOneDesc]);

  const addPokemonToTeam = async (pokemonObj) => {
    console.log('Within addPokemonToTeam')
    try {
        const result = await axios.post('http://localhost:3000/addToTeam', pokemonObj );
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
  }

  return(
    <div className="container">
      <div className='flex-container1'>
        <div className='picAndButton'>
          <Picture pokemonOne={pokemonOne}/>
          <button onClick={() => {addPokemonToTeam(pokemonOne)}}>Add to team</button>
        </div>
        <Stats pokemonOne={pokemonOne}/>
      </div>
      <div className='description'><Description pokemonOneDesc={pokemonOneDesc}/></div>
      <div className='flex-container2'>
        <UserInputForm setPokemonOne={setPokemonOne}  setpokemonOneDesc={setpokemonOneDesc}/>
        <UserInputForm setPokemonOne={setPokemonOne}  setpokemonOneDesc={setpokemonOneDesc}/>
      </div>
    </div>
  );
}

export default SearchContainer;