import React, { useEffect} from 'react';
import Nav from './Nav';
import{useDispatch, useSelector} from 'react-redux'
import { deletecontact, getcontact } from '../JS/contactSlice/contactslice';
import { Navigate } from 'react-router-dom';
const Activity = () => {
   
    const  dispatch = useDispatch() 
   
    useEffect(() => {
      
    dispatch(getcontact())
     
    }, [])
    const contactlist=useSelector((store)=>store.contact?.contact)
  return (
   
   
    <div className='general'> 
    <div>
    <Nav />
    </div>
   
<div className='lists'>
<div className='list'>
{contactlist?.map((el)=>(
    <div className='blocs'>
    
    <img src={el.photo}></img>
    <h2>{el.name} </h2>
    <h2>{el.phone}</h2>
    <button onClick={()=>{dispatch(deletecontact(el._id)) ; setTimeout(()=>{
        Navigate("/act");
    },1000);
    setTimeout(()=>{window.location.reload();},1000);

     }}> supprimer</button>
    </div>
   

))},
</div>
</div>

</div>
   
  );
}

export default Activity;
