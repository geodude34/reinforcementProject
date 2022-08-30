import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import Login from './Login.jsx';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';


{/* <Route path='/home' element={<MainContainer/>} />
              <Route path='/compare' element={<Compare />} />
              <Route path='/team' element={<Team />} /> */}



const App = () => {

  const clientId = "383042639792-sr4e1d41vs3f02poclsdc097ao16b5sg.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }
    gapi.load('client:auth1', start);
  })
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