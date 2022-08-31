import React from 'react';
import testImg from '../assets/geodude.png';

const Task = props => {
  
  return (
    <div className='pictureDiv'>
      <img className='profilePic' src={testImg} alt="Geodude"></img>
    </div>
  );
};

export default Task;