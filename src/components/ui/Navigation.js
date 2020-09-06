import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOutType } from '../../actions/auth';
import { parseToken } from '../../helpers/getToken';
import avatar from '../../assets/img/noimage.png'

export const Navigation = () => {

    const { token } = useSelector(state => state.auth)

    const [user, setUser] = useState({})

    useEffect(() => {
        if (token) {
            const userData = parseToken(token)
            setUser(userData)
        }
    }, [token])
    
    const { image, username } = user

    const dispatch = useDispatch()

    const handleOnLogout = () => {
        dispatch(logOutType())
    }

    return (
        <header className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
                </Link>
                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/dashboard" className="navbar-item">Home</Link>
                    <Link to="/contact" className="navbar-item">Documentation</Link>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <Link to="/profile" className="navbar-item avatar">
                        {username}
                        <img className="is-rounded" width="30" height="30" src={ image ? image : avatar} alt={username} />
                    </Link>
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
