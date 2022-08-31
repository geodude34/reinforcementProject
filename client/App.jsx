import React, {useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer.jsx';
import Header from './header.jsx';


const App = () => {
  const [pokemonOne, setPokemonOne] = useState();
  const [pokemonOneDesc, setpokemonOneDesc] = useState();
  return (
    <div>
      <BrowserRouter>
        <Header />
       
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<SearchContainer 
              pokemonOne={pokemonOne}
              setPokemonOne={setPokemonOne}
              pokemonOneDesc={pokemonOneDesc}
              setpokemonOneDesc={setpokemonOneDesc}
            />} />
            <Route exact path='/team' element={<UserTeam />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
