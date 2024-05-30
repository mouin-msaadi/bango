

import {useDispatch, useSelector} from 'react-redux';
import { getcontact ,addcontact,deletecontact} from './JS/contactSlice/contactslice';
import { useEffect,useState } from 'react';
import Nav from './Nav';

function Activités() {
  const dispatch=useDispatch()
  const [ping,setping]=useState(false)
  useEffect(() => {
 dispatch(getcontact())
  }, [ping])

  const contactlist=useSelector((store)=>store.contact?.contact)
 const[newcontact,setnewcontact]=useState({
  name:"",
  photo:"",

 })

  return (
    <div className="Activités">
    <Nav />
      <header className="Activités-header">
        <h1>ADD CONTACT</h1>
        <input placeholder='name' type='text' onChange={(e)=>setnewcontact({...newcontact,name:e.target.value})}></input>
        <input placeholder='photo' type='text' onChange={(e)=>setnewcontact({...newcontact,photo:e.target.value})}></input>
        <button onClick={()=>(dispatch(addcontact(newcontact)),setping(1))}>add</button>
     {contactlist?.map((el)=>(
      <
      >
      <img src={el.photo}></img>
      <h1>{el.name}</h1>
      
      <button onClick={()=>(dispatch(deletecontact(el._id)),setping(!ping))}>delete</button>
      
    
   
      </>
     ))
     }

      </header>
    </div>
  );
}

export default Activités;
