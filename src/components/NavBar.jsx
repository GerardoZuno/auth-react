import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const NavBar = ({ firebaseUser }) => {
  const history = useHistory();

  const cerrarSesion = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        AUTH
      </Link>
      <div>
        <div className="d-flex">
          <NavLink className="btn btn-dark mr-2" to="/" exact>
            Inicio
          </NavLink>
          {firebaseUser !== null ? (
            <NavLink className="btn btn-dark mr-2" to="/admin" exact>
              Admin
            </NavLink>
          ) : null}

          {firebaseUser !== null ? (
            <button
              className="btn btn-dark mr-2"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          ) : (
            <NavLink className="btn btn-dark mr-2" to="/login" exact>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
