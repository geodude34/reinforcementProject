import React from 'react';  

const Stats = (props) => {
  const { pokemonOne } = props;
  if (pokemonOne) {
    return (
      <div>
        <h2>Hp: {pokemonOne.hp}</h2>
        <h2>Att: {pokemonOne.attack}</h2>
        <h2>Def: {pokemonOne.defense}</h2>
        <h2>Sp. Att: {pokemonOne.spattack}</h2>
        <h2>Sp. Def: {pokemonOne.spdefense}</h2>
        <h2>Speed: {pokemonOne.speed}</h2>
        <br></br>
        <br></br>
        <span className={`${pokemonOne.type1} type`}>{pokemonOne.type1}</span>
        <br></br>
        <br></br>
        {pokemonOne.type2 && <span className={`${pokemonOne.type2} type type2`}>{pokemonOne.type2}</span>}
      </div>
    );
  }
  else return (
    <div>
      <h2>Hp:</h2>
      <h2>Att:</h2>
      <h2>Def:</h2>
      <h2>Sp. Att:</h2>
      <h2>Sp. Def:</h2>
      <h2>Speed:</h2>
    </div>
  );
}
  
export default Stats