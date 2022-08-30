import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer.jsx';
import Header from './header.jsx';
//import UserTeam from './UserTeam';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <div className='content'>
            {/* <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<MainContainer/>} />
              <Route path='/compare' element={<Compare />} />
              <Route path='/team' element={<Team />} />
            </Routes> */}
            <SearchContainer />
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
