import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
//import Header from './components/Header.jsx';


const App = () => {
  return (
    <div>
      <HashRouter>
        <div className='wrapper-container'>
          <Header />

          <div className='content'>
            <Routes>
              <Route path='/login' element={<ProductContainer />} />
              <Route path='/search' element={<TeamContainer />} />
              <Route path='/compare' element={<Terms />} />
              <Route path='/team' element={<Privacy />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;