import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOutType } from '../../actions/auth';
import noAvatarNoFound from '../../assets/img/noimage.png'
import { cleanUser } from '../../actions/user';
import { API_URL } from "../../helpers/constants";
import { getImagen } from '../../helpers/getAvatar';

export const Navigation = () => {

    const dispatch = useDispatch()

    const {user : {id, username, image}} = useSelector(state => state.user)

    const imagen = image !== undefined ? `${API_URL}/get-avatar?id=${id}` : noAvatarNoFound

    const handleOnLogout = () => {
        dispatch(logOutType())
        dispatch(cleanUser())
    }

    return (
        <header className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    Home
                </Link>
                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/dashboard" className="navbar-item">Inicio</Link>
                    <Link to="/contact" className="navbar-item">Documentation</Link>
                    <Link to="/productos" className="navbar-item">Productos</Link>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <Link to="/profile" className="navbar-item avatar">
                        {username}
                        {/* <img className="is-rounded" width="30" height="30" src={ image ? image : avatar} alt={username} /> */}
                        <img className="is-rounded" width="30" height="30" src={ getImagen(image, id) } alt={username} />
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