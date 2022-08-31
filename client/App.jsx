import React,{useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import CompareContainer from './containers/SearchContainer.jsx';
import UserTeam from './components/UserTeam.jsx';
import Login from './Login.jsx';

const App = () => {
  const [pokemonOne, setPokemonOne] = useState();
  const [pokemonTwo, setPokemonTwo] = useState();
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
        <CompareContainer pokemonTwo={pokemonTwo} setPokemonTwo={setPokemonTwo}/>
        <UserTeam />
    </div>
    </>
  );
};

export default App;
