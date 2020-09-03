import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { register } from '../../actions/auth';
import { Link } from 'react-router-dom';

export const Register = ({history}) => {

    const [{ error, message }, setRegistro] = useState({})

    const [ formValue, handleInputChange ] = useForm({
        username : "dekk",
        email    : "dekk@gmail.com",
        password : "123456789"
    })

    const { username, email, password } = formValue

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if ( isFormValid ) {
            register(formValue).then(res => {
                setRegistro(res)
                if( !res.error )
                    history.push("/auth/login")
            })
        }
    }

    const isFormValid = () => {
        if (username.trim().length === 0) {
            return false
        } else if ( email.trim().length === 0) {
            return false
        } else if ( password.trim().length < 6 ) {
            return false
        }

        return true
    }

    return (
        <div className="container mt-2">
            <div className='columns'>
                <div className='column is-6'>
                    <h1 className="title is-1">Register</h1>
                    
                    {
                        error
                            && <div className="notification is-danger">
                                {message}
                               </div>
                    }

                    <form
                        onSubmit={handleOnSubmit}
                    >
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
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
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <button
                            className="button is-primary"
                            type="submit"
                        >
                            Send
                        </button>
                        <p class="help">¿Tienes cuenta? <Link to="/auth/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
