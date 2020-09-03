import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOutType } from '../../actions/auth';

export const Navigation = () => {

    const history = useHistory()

    // const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleOnLogout = () => {
        dispatch(logOutType())
        history.push("/auth/login")
    }

    return (
        <header className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </Link>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/dashboard" className="navbar-item">Home</Link>
                    <Link to="/contact" className="navbar-item">Documentation</Link>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <button 
                            className="button is-danger"
                            onClick={handleOnLogout}
                        >
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
