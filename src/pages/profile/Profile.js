import React from 'react'
import { useSelector } from 'react-redux'
import {parseToken} from '../../helpers/getToken'
import { useForm } from '../../hooks/useForm'
import { updateUser } from '../../actions/user'

export const Profile = () => {

    const { token } = useSelector(state => state.auth)
    
    const usuario = parseToken(token)

    const [formValue, handleInputChange] = useForm({
        id: usuario.id,
        nombre : usuario?.nombre,
        apellido: usuario?.apellido,
        username : usuario?.username,
        description : usuario?.description,
    })

    const { nombre, apellido, username, description } = formValue
    
    const handleOnSubmit = e => {
        e.preventDefault();
        
        updateUser(formValue)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className='columns'>
                <div className='column is-12'>
                    <h1 className="title">{username}</h1>
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
                            <label className="label">Username</label>
                            <div className="control">
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Text input"
                                    name="username"
                                    value={username}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Descripción</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Text input"
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
            </div>
        </div>
    )
}
