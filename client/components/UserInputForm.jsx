import React from 'react';

const UserInputForm = props => {

  const userInput = input => console.log(input);

  return(
  <div className="displayBox">
    <input placeholder='Enter pokemon here...' type="text" id="userInput"/>
    <button onClick={() => userInput(document.querySelector('#userInput').value)}>Search</button>
    </div>
  );
};

export default UserInputForm;