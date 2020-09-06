import React, { useState, useEffect } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import { DashboardRouter } from './DashboardRouter'
import { Register } from '../pages/auth/Register'
import { useSelector } from 'react-redux'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {

    const auth = useSelector(state => state.auth)

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if( auth?.status ) {
            setIsLoggedIn(true)
        }else {
            setIsLoggedIn(false)
        }
    }, [auth, setIsLoggedIn])

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        exact 
                        path="/auth/login"
                        isLoggedIn={isLoggedIn}
                        component={Login}
                    />

                    <PublicRoutes
                        exact 
                        path="/auth/register" 
                        isLoggedIn={isLoggedIn}
                        component={Register}
                    />

                    <PrivateRoutes
                        path="/"
                        isLoggedIn={isLoggedIn}
                        component={DashboardRouter}
                    />
                </Switch>
            </div>
        </Router>
    )
}
