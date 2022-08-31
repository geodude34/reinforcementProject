import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

const navigate = useNavigate();

const home = () => {
    navigate('/home');
}

const team = () => {
    navigate('/team')
}

const logout = () => {
    navigate('/')
}


return (
  <div className='header-container'>
    <h1>EncyloPOKEIA</h1>
    <button className="header-component" onClick={home}>Home</button>
    <button className="header-component" onClick={team}>Team</button>
    <button className="header-component" onClick={logout}>Logout</button>
 

  </div>
 
  );
}

export default Header;