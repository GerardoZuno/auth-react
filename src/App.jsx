import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import NavBar from './components/NavBar'


function App() {
  return (
    <Router >
      <div className="container">
        <h1>Auth</h1>
        <NavBar />
       <Switch>
         <Route exact path='/login' component=''/>
         <Route exact path='/admin' component=''/>
         <Route exact path='/inicio' component=''/>


       </Switch>
      </div>
    </Router>
  
  );
}

export default App;
