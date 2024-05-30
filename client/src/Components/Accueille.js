import React from 'react';
import { Link } from 'react-router-dom';
import image from './logoo.png'
const Accueille = () => {
  return (
    <div>
  
    <div  className='background'>
    
    
    <div className='parent'>
    <div className='logo'>
    <img  src={image} alt='logo' ></img>
    </div>
    <div className='menu'>
    
    <ul>
    <Link to="/acc"><li>Accueille</li></Link>
    <Link to="/serv"> <li>Services</li></Link>
    <Link to="/act"> <li>Historique</li></Link>
    <Link to="/conta"> <li>Contact</li></Link>
    
    </ul>
    </div>
    </div>
  </div>
      
    </div>
  );
}

export default Accueille;
