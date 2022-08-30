import React from 'react';
import Picture from '../components/Picture.jsx'
import Stats from '../components/Stats.jsx'
import CompareForm from '../components/CompareForm.jsx'
import Types from '../components/Types.jsx'



const compare = () => {

  return (
    <>
    <div className="picure-display">
        <Picture />
        <Picture />
    </div>
    <div className="stats-display">
        <Stats />
        <Stats />
    </div>
    <div className="type-compare">
        <Types />
    </div>
    <div className="compare-form">
        <CompareForm />
    </div>
 
   </> 
  )
  
}


export default compare;