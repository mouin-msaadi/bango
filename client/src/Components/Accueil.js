import React from 'react';
import image from './logoo.png'
import { Link } from 'react-router-dom';

const Accueil = () => {
   //var name="mouin msaadi 10 /01/1997"
   //fnctt=name.slice(name.indexOf(" "),name.length)
  
  return (
    
    <div  className='background'>
    
    
      <div className='parent'>
      <div className='logo'>
      <img src={image} alt='logo' ></img>
      </div>
      <div className='menu'>
      
      <ul>
      <Link to="/acc"><li>Accueille</li></Link>
      <Link to="/serv"> <li>Services</li></Link>
     <li>Activités</li>
      <Link to="/conta"> <li>Contact</li></Link>
      
      </ul>
      </div>
      </div>
    </div>
  );
}

export default Accueil;
