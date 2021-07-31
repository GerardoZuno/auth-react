import React from 'react'
import { Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">AUTH</Link>
            <div>
                <div className="d-flex">
                    <NavLink className='btn btn-dark mr-2' to='/' exact>
                        Inicio
                    </NavLink>
                    <NavLink className='btn btn-dark mr-2' to='/admin' exact>
                        Admin
                    </NavLink>
                    <NavLink className='btn btn-dark mr-2' to='/login' exact>
                        Admin
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar
