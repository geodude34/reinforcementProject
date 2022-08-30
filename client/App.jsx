import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import CompareContainer from './containers/CompareContainer.jsx';

// Route path='/login' element={<Login />} />
//               <Route path='/' element={<MainContainer/>} />
//               <Route path='/compare' element={<Compare />} />
//               <Route path='/team' element={<Team />} />


const App = () => {
  return (
    <div>
  
        <CompareContainer />
    </div>
  );
};

export default App;
