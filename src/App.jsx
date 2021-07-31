import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import NavBar from './components/NavBar'
import Admin from './components/Admin'
import Login from './components/Login'


function App() {
  return (
    <Router >
      <div className="container">
        <h1>Auth</h1>
        <NavBar />
       <Switch>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/admin' component={Admin}/>
         <Route exact path='/' />


       </Switch>
      </div>
    </Router>
  
  );
}

export default App;
