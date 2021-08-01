import React, { useState, useCallback } from "react";
import { auth, db } from "../firebase.js";
import {withRouter} from "react-router-dom"

function Login({history}) {
  
  const [email, setEmail] = useState("gerardo@gmail.com");
  const [password, setPassword] = useState("123123");
  const [error, setError] = useState(null);
  const [esRegistro, setEsRegistro] = useState(true);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      //console.log('Ingrese un email')
      setError("Ingrese un email");
      return;
    }
    if (!password.trim()) {
      // console.log('esta vacio password')
      setError("Ingrese el password");
      return;
    }
    if (password.length < 6) {
      //console.log('ingrese 6 caracteres')
      setError("Ingrese 6 caracteres");

      return;
    }

    console.log("sucess");
    setError(null);

    if (esRegistro) {
      registrar();
    } else {         
      login();
    }
  };

  const registrar = useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);

      // .add da password aleatorio .doc personalizado
      await db.collection("usuarios").doc(res.user.uid).set({
        email: res.user.email,
        uid: res.user.uid,
      });
      await db.collection(res.user.uid).add({
          name: 'Tarea de ejemplo',
          fecha: Date.now()
      })
      setEmail("");
      setPassword("");
      setError(null);
      history.push('/admin')
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        //setError(error.message);
        setError("Email no valido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Error, Email ya registrado");
      }
    }
  }, [email, password, history]);

  const login = useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);
      setEmail("");
      setPassword("");
      setError(null);
      history.push('/admin')
    }
    
    catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        //setError(error.message);
        setError("Email no valido");
      }
      if (error.code === "auth/user-not-found") {
        //setError(error.message);
        setError("usuario no encontrado");
      }
      if (error.code ===  "auth/wrong-password") {
        //setError(error.message);
        setError("password incorrecto");
      }     


    }
  }, [email, password, history]);

  const loggearse = () => {
    setEsRegistro(!esRegistro)
    setEmail("");
    setPassword("");
    setError(null);
  }

  return (
    <div className="mt-5">
      <h3 className="text center">
        {esRegistro ? "Registro de usuarios" : "Login de Acceso"}
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
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese el password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="btn btn-dark btn-lg btn-block">
              {esRegistro ? "Registarse" : "Acceder"}
            </button>
            <button
              className="btn btn-info btn-sm btn-block"
              type="button"
              onClick={() => loggearse()}
            >
              {esRegistro ? "Ya tienes cuenta?" : "Registrarse"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
