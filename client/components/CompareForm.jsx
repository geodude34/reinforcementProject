import React from 'react';

const compareForm = () => {


  return(
  <div className="displayBox">
    <input placeholder='Enter a name to compare a Pokemon...' type="text" id="userInput"/>
    <button onClick={() => userInput(document.querySelector('#userInput').value)}>Search</button>
    </div>
  );
};

export default compareForm;