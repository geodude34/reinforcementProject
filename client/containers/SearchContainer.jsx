import Description from '../components/Description.jsx';
import Picture from '../components/Picture.jsx'
import Stats from '../components/Stats.jsx'
import UserInputForm from '../components/UserInputForm.jsx'
import { useState } from 'react';
import axios from 'axios';

c

const SearchContainer = () => {
  return(
    <div className="container">
      <div className='flex-container1'>
        <div className='picAndButton'>
          <Picture />
          <button onClick={() => console.log('clicked')}>Add to team</button>
        </div>
        <Stats />
      </div>
      <div className='description'><Description /></div>
      <div className='flex-container2'>
        <span></span>
        <UserInputForm />
        <UserInputForm />
      </div>
    </div>
  );
}



export default SearchContainer;