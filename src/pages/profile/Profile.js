import React, { useState } from 'react'
import { useDropzone } from "react-dropzone";

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../actions/user';
import { getImagen } from '../../helpers/getAvatar';
import { getCover } from '../../helpers/getCover';
import { useForm } from '../../hooks/useForm';
import "./profile.css";

export const Profile = () => {

    const dispatch = useDispatch()

    const {user} = useSelector(state => state.user)

    const [formValue, handleInputChange] = useForm(user)

    const [ modal, setModal ] = useState(false)
    
    const handleOnSubmit = e => {
        e.preventDefault();
        dispatch(updateUser(formValue))
    }

    const { nombre, apellido, email, username, description, image } = formValue

    return (
        <div className="container profile">
            <div className='columns'>
                <div className="column is-6">
                    <div className="card">
                        <div className="cover" style={{ backgroundImage: `url(${getCover(user?.cover, user?.id)})` }}></div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="avatar" src={getImagen(user?.image, user?.id)} alt={nombre}/>
                                <h3>{nombre}</h3>
                                <button 
                                    className="button is-primary"
                                    onClick={() => setModal(true)}
                                >
                                    Primary
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column is-6'>
                    <hr />
                    <form
                        onSubmit={handleOnSubmit}
                    >
                        <div className="field">
                            <label className="label">Nombre</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Text input"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Apellido</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Text input"
                                    name="apellido"
                                    value={apellido}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="email" 
                                    placeholder="Text input"
                                    name="email"
                                    value={email}
                                    disabled={true}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Text input"
                                    name="username"
                                    value={username}
                                    disabled={true}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Descripción</label>
                            <div className="control">
                                <textarea 
                                    className="textarea"
                                    type="text"
                                    placeholder="Text input"
                                    cols="30"
                                    rows="5"
                                    name="description"
                                    value={description}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <button
                            className="button is-primary"
                            type="submit"
                        >
                            Guardar
                        </button>
                    </form>
                </div>
                
                <div 
                    className={ `modal ${modal ? "is-active" : ""}` }
                >
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        hola :D
                    </div>
                    <button 
                        className="modal-close is-large"
                        aria-label="close"
                        onClick={() => setModal(false)}
                    ></button>
                </div>

            </div>
        </div>
    )
}