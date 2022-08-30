import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer.jsx';
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
        

        <UserTeam />
        {/* <div className='content'>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<MainContainer />} />
            <Route exact path='/compare' element={<Compare />} />
            <Route exact path='/team' element={<UserTeam />} />
          </Routes>
        </div> */}
        <SearchContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
