import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

const navigate = useNavigate();

const home = () => {
    navigate('/');
}

const team = () => {
    navigate('/team')
}

const logout = () => {
    navigate('/login')
}

return (
  <div className='header-container'>
    <h1>Encylopokeia</h1>
    <button className="header-component" onClick={home}>Home</button>
    <button className="header-component" onClick={team}>Team</button>
    <button className="header-component" onClick={logout}>Logout</button>

  </div>
 
  );
}

export default Header;