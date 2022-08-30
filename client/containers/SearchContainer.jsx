import Description from '../components/Description.jsx';
import Picture from '../components/Picture.jsx'
import Stats from '../components/Stats.jsx'
import UserInputForm from '../components/UserInputForm.jsx'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <UserInputForm />
        <UserInputForm />
      </div>
    </div>
    );
  }

}

export default SearchContainer;