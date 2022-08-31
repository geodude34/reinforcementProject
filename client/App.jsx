import React,{useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import CompareContainer from './containers/SearchContainer.jsx';
import UserTeam from './components/UserTeam.jsx';
import Login from './Login.jsx';

const App = () => {
  const [pokemonOne, setPokemonOne] = useState();
  return (
    // <div>
    //   <BrowserRouter>
    //     <Header />
      
    //       <Routes>
    //         <Route exact path='/' element={<Login />} />
    //         <Route exact path='/main' element={<MainContainer />} />
    //         <Route exact path='/team' element={<UserTeam />} />
    //       </Routes>
    <>
        <div> 
        {/* <SearchContainer pokemonOne={pokemonOne} setPokemonOne={setPokemonOne} /> */}
        <CompareContainer pokemonOne={pokemonOne} />
        <UserTeam />
    </div>
    </>
  );
};

export default App;
