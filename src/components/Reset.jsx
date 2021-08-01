import React from 'react'
import {auth} from '../firebase.js'
import { useHistory } from "react-router-dom";


function Reset() {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState(null);

    const history = useHistory() 

    const procesarDatos = (e) => {
        e.preventDefault();
        if (!email.trim()) {
          console.log("datos vacios")
          setError("Ingrese un email");
          return;
        }
       
        setError(null); 
        recuperarDatos()   
         
      };

      const recuperarDatos = React.useCallback(async() => {
         try {
               await auth.sendPasswordResetEmail(email)
               console.log('correo enviado')
               history.push('/login')
         }catch(error){
           console.log(error.code)
           if(error.code === "auth/user-not-found")
           setError('correo no registrado')
         }

      },[email, history])
    

    return (
        <div className="mt-5">
        <h3 className="text center">
            Reset Password
        </h3>
        <hr />
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={procesarDatos}>
              {error && <div className="alert alert-danger">{error}</div>}
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Ingrese un email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            
              <button className="btn btn-dark btn-lg btn-block">
                  Reiniciar Contraseña
              </button>        
             
            </form>
          </div>
        </div>
      </div>
    )
}

export default Reset
