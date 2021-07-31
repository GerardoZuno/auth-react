import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import NavBar from './components/NavBar'
import Admin from './components/Admin'
import Login from './components/Login'
import {auth} from "./firebase.js";




function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
       auth.onAuthStateChanged(user => {
         console.log(user)
         if(user){
           setFirebaseUser(user)
         }else {
          setFirebaseUser(null)
         }
       })
  }, [])

  return firebaseUser !== false ? (
    <Router >
      <div className="container">
        <NavBar firebaseUser={firebaseUser}/>
       <Switch>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/admin' component={Admin}/>
         <Route exact path='/' />


       </Switch>
      </div>
    </Router>
  
  ) :
  <p>Loading...</p>
}

export default App;
