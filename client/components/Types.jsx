import React from 'react';
import { useState } from 'react';


const Types = () => {
    let pokemonOneType = 'normal';
    let pokemonTwoType = 'fire';
    let pokemonEffectiveness = '';

    if (pokemonOneType === 'normal' && pokemonTwoType === 'rock' || pokemonOneType === 'normal' && pokemonTwoType === 'steel' ||
    pokemonOneType === 'fire'  && pokemonTwoType === 'fire' || pokemonOneType === 'fire'  && pokemonTwoType === 'water' ||
    pokemonOneType === 'fire' && pokemonTwoType === 'rock' || pokemonOneType === 'fire' && pokemonTwoType === 'dragon' ||
    pokemonOneType === 'water' && pokemonTwoType === 'water' || pokemonOneType === 'water' && pokemonTwoType === 'grass' ||
    pokemonOneType === 'water' && pokemonTwoType === 'dragon' || pokemonOneType === 'electric' && pokemonTwoType === 'electric'
    || pokemonOneType === 'electric' && pokemonTwoType === 'grass' || pokemonOneType === 'electric' && pokemonTwoType === 'dragon' ||
    pokemonOneType === 'grass' && pokemonTwoType === 'fire' || pokemonOneType === 'grass' && pokemonTwoType === 'grass' || 
    pokemonOneType === 'grass' && pokemonTwoType === 'poison' || pokemonOneType === 'grass' && pokemonTwoType === 'flying' ||
    pokemonOneType === 'grass' && pokemonTwoType === 'bug' || pokemonOneType === 'grass' && pokemonTwoType ===  'dragon' || 
    pokemonOneType === 'grass' && pokemonTwoType === 'steel' || pokemonOneType === 'ice' && pokemonTwoType === 'fire' ||
    pokemonOneType === 'ice' && pokemonTwoType === 'water' || pokemonOneType === 'ice' && pokemonTwoType === 'ice' ||
    pokemonOneType === 'ice' && pokemonTwoType === 'steel' || pokemonOneType === 'fighting' && pokemonTwoType === 'poison' || 
    pokemonOneType === 'fighting' && pokemonTwoType === 'flying' ||pokemonOneType === 'fighting' && pokemonTwoType === 'psychic' 
    || pokemonOneType === 'fighting' && pokemonTwoType === 'bug' || pokemonOneType === 'fighting' && pokemonTwoType === 'fairy '
    || pokemonOneType === 'poison' && pokemonTwoType === 'poison '|| pokemonOneType === 'poison' && pokemonTwoType === 'ground' ||
    pokemonOneType === 'poison' && pokemonTwoType === 'rock'|| pokemonOneType === 'poison' && pokemonTwoType === 'ghost' ||
    pokemonOneType === 'ground' && pokemonTwoType === 'grass' || pokemonOneType === 'ground' && pokemonTwoType === 'bug' || 
    pokemonOneType === 'flying' && pokemonTwoType === 'electric' || pokemonOneType === 'flying' && pokemonTwoType === 'rock' ||
    pokemonOneType === 'flying' && pokemonTwoType === 'steel' ||  pokemonOneType === 'psychic' && pokemonTwoType === 'psychic' ||
    pokemonOneType === 'psychic' && pokemonTwoType === 'steel' || pokemonOneType === 'bug' && pokemonTwoType === 'fire' ||
    pokemonOneType === 'bug' && pokemonTwoType === 'fighting' || pokemonOneType === 'bug' && pokemonTwoType === 'poison' ||
    pokemonOneType === 'bug' && pokemonTwoType === 'flying' || pokemonOneType === 'bug' && pokemonTwoType === 'ghost' ||
    pokemonOneType === 'bug' && pokemonTwoType === 'steel' || pokemonOneType === 'bug' && pokemonTwoType === 'fairy' ||
    pokemonOneType === 'rock' && pokemonTwoType === 'fighting' || pokemonOneType === 'rock' && pokemonTwoType === 'ground' ||
    pokemonOneType === 'rock' && pokemonTwoType === 'steel' || pokemonOneType === 'ghost' && pokemonTwoType === 'dark' ||
    pokemonOneType === 'dragon' && pokemonTwoType === 'steel' || pokemonOneType === 'dark' && pokemonTwoType === 'dark' ||
    pokemonOneType === 'dark' && pokemonTwoType === 'fairy' || pokemonOneType === 'steel' && pokemonTwoType === 'fire' ||
    pokemonOneType === 'steel' && pokemonTwoType ==='water' || pokemonOneType === 'steel' && pokemonTwoType === 'electric' ||
    pokemonOneType === 'steel' && pokemonTwoType === 'steel' || pokemonOneType === 'fairy' && pokemonTwoType === 'fire' ||
    pokemonOneType === 'fairy' && pokemonTwoType === 'poison' || pokemonOneType === 'fairy' && pokemonTwoType === 'steel') pokemonEffectiveness = 'not very effective';

    else if (pokemonOneType === 'fire' && pokemonTwoType === 'grass' || pokemonOneType === 'fire' && pokemonTwoType === 'ice' 
    || pokemonOneType === 'fire' && pokemonTwoType === 'bug' || pokemonOneType === 'fire' && pokemonTwoType === 'steel' ||
    pokemonOneType === 'water' && pokemonTwoType === 'fire' || pokemonOneType === 'water' && pokemonTwoType === 'ground' ||
    pokemonOneType === 'water' && pokemonTwoType === 'rock' || pokemonOneType === 'electric' && pokemonTwoType === 'flying' ||
    pokemonOneType === 'grass' && pokemonTwoType === 'water' || pokemonOneType === 'grass' && pokemonTwoType === 'ground' ||
    pokemonOneType === 'ice' && pokemonTwoType === 'grass' || pokemonOneType === 'ice' && pokemonTwoType === 'ground' ||
    pokemonOneType === 'ice' && pokemonTwoType === 'flying' || pokemonOneType === 'ice' && pokemonTwoType === 'dragon' ||
    pokemonOneType === 'fighting' && pokemonTwoType === 'normal' || pokemonOneType === 'fighting' && pokemonTwoType === 'ice' ||
    pokemonOneType === 'fighting' && pokemonTwoType === 'rock' || pokemonOneType === 'fighting' && pokemonTwoType === 'dark'
    || pokemonOneType === 'fighting' && pokemonTwoType === 'steel' || pokemonOneType === 'poison' && pokemonTwoType === 'grass' ||
    pokemonOneType === 'poison' && pokemonTwoType === 'fairy' || pokemonOneType === 'ground' && pokemonTwoType === 'fire' ||
    pokemonOneType === 'ground' && pokemonTwoType === 'electric'|| pokemonOneType === 'ground' && pokemonTwoType === 'poison'
    || pokemonOneType === 'ground' && pokemonTwoType === 'rock' || pokemonOneType === 'ground' && pokemonTwoType === 'steel' ||
    pokemonOneType === 'flying' && pokemonTwoType === 'grass' || pokemonOneType === 'flying' && pokemonTwoType === 'fighting' ||
    pokemonOneType === 'flying' && pokemonTwoType === 'bug' || pokemonOneType === 'psychic' && pokemonTwoType === 'fighting' ||
    pokemonOneType === 'psychic' && pokemonTwoType === 'poison' || pokemonOneType === 'bug' && pokemonTwoType === 'grass' ||
    pokemonOneType === 'bug' && pokemonTwoType === 'psychic' || pokemonOneType === 'bug' && pokemonTwoType === 'dark' ||
    pokemonOneType === 'rock' && pokemonTwoType === 'fire' || pokemonOneType === 'rock' && pokemonTwoType === 'ice' ||
    pokemonOneType === 'rock' && pokemonTwoType === 'flying' || pokemonOneType === 'rock' && pokemonTwoType === 'bug' ||
    pokemonOneType === 'ghost' && pokemonTwoType === 'psychic' || pokemonOneType === 'ghost' && pokemonTwoType === 'ghost' ||
    pokemonOneType === 'dragon' && pokemonTwoType === 'dragon' || pokemonOneType === 'dark' && pokemonTwoType === 'psychic' ||
    pokemonOneType === 'dark' && pokemonTwoType === 'ghost' || pokemonOneType === 'steel' && pokemonTwoType === 'ice' ||
    pokemonOneType === 'steel' && pokemonTwoType === 'rock' || pokemonOneType === 'steel' && pokemonTwoType === 'fairy' ||
    pokemonOneType === 'fairy' && pokemonTwoType === 'fighting'|| pokemonOneType === 'fairy' && pokemonTwoType === 'dragon'
    || pokemonOneType === 'fairy' && pokemonTwoType === 'dark') pokemonEffectiveness = 'very effective';

    else if (pokemonOneType === 'normal' && pokemonTwoType === 'ghost' || pokemonOneType === 'electric' && pokemonTwoType === 'ground' ||
    pokemonOneType === 'fighting' && pokemonTwoType === 'ghost' || pokemonOneType === 'poison' && pokemonTwoType === 'steel'
    || pokemonOneType === 'ground' && pokemonTwoType === 'flying' || pokemonOneType === 'psychic' && pokemonTwoType === 'dark' ||
    pokemonOneType === 'ghost' && pokemonTwoType === 'normal' || pokemonOneType === 'dragon' && pokemonTwoType === 'fairy') pokemonEffectiveness = 'not effective';

    else pokemonEffectiveness = 'Normal effectiveness';

    
     
    

    return(
        <p>Type Comparison / Effectiveness <br></br>
        {pokemonOneType} type has {pokemonEffectiveness} against {pokemonTwoType} type </p> 
        


    )
};

export default Types;