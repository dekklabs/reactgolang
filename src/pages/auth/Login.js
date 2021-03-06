import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth'
import { Link } from 'react-router-dom'

export const Login = () => {

    const dispatch = useDispatch()

    const { error, message } = useSelector(state => state.auth)
    const { loading } = useSelector(state => state.ui)

    const [formValue, handleInputChange] = useForm({
        username: 'dekk',
        password: '123456789'
    })

    const { username, password } = formValue

    const handleOnLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(login(formValue))
        }
    }

    const isFormValid = () => {
        if( username.trim().length < 1 ) {
            return false
        } else if( password.trim().length < 1 ) {
            return false
        }

        return true
    }

    return (
        <div className="container mt-2">
            {
                error
                    && <div class="notification is-danger">
                        { message }
                       </div>
            }
            <div className='columns'>
                <div className='column is-6'>
                    <h1 className="title is-primary">Login</h1>
                    <form
                        onSubmit={handleOnLogin}
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
                            {
                                loading 
                                ? <span>Loading... :D</span>
                                : <span>Send</span>
                            }
                        </button>
                        <p className="help mt-2">¿No tienes cuenta?  <Link to="/auth/register">Registrate</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
