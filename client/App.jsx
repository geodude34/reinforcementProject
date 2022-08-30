import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import Login from './Login.jsx';
import UserTeam from './UserTeam';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';


{/* <Route path='/home' element={<MainContainer/>} />
              <Route path='/compare' element={<Compare />} />
              <Route path='/team' element={<Team />} /> */}






const App = () => {

 
  return (
    <div>
      <BrowserRouter>
        <Header />
           <div className='content'>
            <Routes>
              <Route path='/' element={<Login />} /> 
            </Routes>
            </div>

      </BrowserRouter>
    </div>
  );
};

export default App;
