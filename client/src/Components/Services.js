import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { useDispatch} from 'react-redux';
import { addcontact } from '../JS/contactSlice/contactslice';

const Services = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch( addcontact())

  
 }, [])
  const[newcontact,setnewcontact]=useState({
    name:"",
    photo:"",
    phone:""
   })
  
  return (
    <div>
    <Nav />
    <div className='service'>
    <h1>  vos Services</h1>
    <div className='tt'>
    <h2>Enregistrer votre opération  </h2>
    <input placeholder="enregistrer l'opération ici" type='text' onChange={(e)=>setnewcontact({...newcontact,name:e.target.value})}></input>
    <input placeholder='ajouter la photo ' type='text' onChange={(e)=>setnewcontact({...newcontact,photo:e.target.value})}></input>
    <input placeholder='la date de opération ' type='text' onChange={(e)=>setnewcontact({...newcontact,phone:e.target.value})}></input>
    <div><button onClick={()=>dispatch(addcontact(newcontact)) }>Enregistrer</button></div>
    </div>
    </div>
    </div>
  );
}

export default Services;
