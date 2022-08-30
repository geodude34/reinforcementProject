import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import UserTeam from './components/UserTeam.jsx';
import SearchContainer from './containers/SearchContainer.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <UserTeam />
        <SearchContainer />

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
