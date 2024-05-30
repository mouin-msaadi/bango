
import './App.css';

import {Routes,Route} from "react-router-dom"

import Contact from './Components/Contact';
import Services from './Components/Services';
import Accueille from './Components/Accueille';
import Activity from './Components/Activity';
function App() {
 

  return (
    <div className="App">
    
      
      
      <Routes>
      <Route  path='/acc' element={<Accueille />}></Route>
      <Route path='/serv' element={<Services />}></Route>
    <Route path='/conta' element={<Contact />}></Route>
    <Route path='/act' element={<Activity />}></Route>



      </Routes>
      
    </div>
  );
}

export default App;
