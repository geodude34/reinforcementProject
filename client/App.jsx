import React,{useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer.jsx';
import Header from './header.jsx';
import UserTeam from './UserTeam.jsx';

const App = () => {
  const [pokemonOne, setPokemonOne] = useState();
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <UserTeam /> */}
        {/* <div className='content'>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<MainContainer />} />
            <Route exact path='/compare' element={<Compare />} />
            <Route exact path='/team' element={<UserTeam />} />
          </Routes>
        </div> */}
        <SearchContainer pokemonOne={pokemonOne} setPokemonOne={setPokemonOne} />
      </BrowserRouter>
    </div>
  );
};

export default App;
