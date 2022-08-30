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
        <div className="outerBox">
          <div><Picture /></div>
          <div><Stats /></div>
          <div><Description /></div>
          <div><UserInputForm /></div>
          <button onClick={() => console.log('clicked')}>Add to team</button>
          <div><UserInputForm /></div>
        </div>
      </div>
    );
  }

}

export default SearchContainer;