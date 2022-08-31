import Description from '../components/Description.jsx';
import Picture from '../components/Picture.jsx'
import Stats from '../components/Stats.jsx'
import UserInputForm from '../components/UserInputForm.jsx'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToTeam } from '../slices/addToTeamSlice.js'

const SearchContainer = (props) =>{
  const dispatch = useDispatch();

  const dummyPokemon = {
    pokemon: 'Darin',
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

  return(
    <div className="container">
      <div className='flex-container1'>
        <div className='picAndButton'>
          <Picture />
          <button onClick={() => dispatch(addToTeam(dummyPokemon))}>Add to team</button>
        </div>
        <Stats />
      </div>
      <div className='description'><Description /></div>
      <div className='flex-container2'>
        <UserInputForm />
        <UserInputForm />
      </div>
    </div>
  );
}

export default SearchContainer;