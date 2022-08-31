import React from 'react';
import { useState } from 'react';

const compareForm = () => {
  <form>
    <label htmlFor='text'>Compare</label>
    <input type='text' id='Input_Text' onChange={(e) => (e.target.value)}/>
    <input type='button' onClick={() =>{
      console.log(props);
      props.addMarket(props.newLocation);
      props.setNewLocation('');}} value='Add New Market' id='marketBox'/>
  </form>
};

export default compareForm;