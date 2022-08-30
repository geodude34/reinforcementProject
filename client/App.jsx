import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Header />

          {/* <div className='content'>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<MainContainer/>} />
              <Route path='/compare' element={<Compare />} />
              <Route path='/team' element={<Team />} />
            </Routes>
          </div> */}

          
    
      </BrowserRouter>
    </div>
  );
};

export default App;