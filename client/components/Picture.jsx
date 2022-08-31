import React from 'react';
import testImg from '../assets/geodude.png';

const Task = props => {
  const { pokemonOne } = props;
  if(pokemonOne){
    return (
      <div className='pictureDiv'>
        <img className={`${pokemonOne.type1} profilPic`} src={pokemonOne.image} alt={pokemonOne.name}></img>
   
      </div>
    );
  }
  else return(
    <div className='pictureDiv'>
        <img className='profilePic' src={testImg} alt='test'></img>
      </div>
  )
};

export default Task;