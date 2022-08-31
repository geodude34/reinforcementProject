import React from 'react';
import { useState } from 'react';

const compareForm = () => {
  return(
    <div className="displayBox">
      <input placeholder='Enter pokemon to compare here...' type="text" id="userInput"/>
      <button onClick={() => onSubmit()}>Search</button>
      </div>
    );
};

export default compareForm;