import React , {Component} from  'react';
// import  {Render}  from "react-dom";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
 
//  import Navbar  from './componet/pages/Navbar';
import './App.css';
import Add from './componet/Add';
import Show from './componet/Show';


 
// class App extends Component {
  function App(){
  // render() {
    return(
    <Router>
      
       <div className='navbar' >
         
         <li>
           <Link to="/Add"> ADD</Link>
         </li>
         <li>
         <Link to="/">Show</Link>
         </li>
        
        
        </div>
          
           <Routes> 
           <Route exact path='/Add/:index' element={< Add />} ></Route>
           
                 <Route exact path='/Add' element={< Add />} ></Route>
                 
                 <Route exact path='/' element={< Show />}></Route>
          </Routes>
         
       </Router>
      
   );
  }
//  }

export default App;
