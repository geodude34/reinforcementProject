import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import UserTeam from './components/UserTeam.jsx';
import Login from './Login.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
      
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/main' element={<MainContainer />} />
            <Route exact path='/team' element={<UserTeam />} />
          </Routes>
      
        <SearchContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
