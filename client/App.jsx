import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import CompareContainer from './containers/CompareContainer.jsx';
import UserTeam from './components/UserTeam.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SearchContainer />
        <CompareContainer />
        

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
