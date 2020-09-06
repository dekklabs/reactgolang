import React, { useState, useEffect } from 'react'
import { 
    BrowserRouter as Router,
    Switch
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
        if( auth.status ) {
            setIsLoggedIn(auth.status)
        }else {
            setIsLoggedIn(auth.status)
        }
    }, [auth, setIsLoggedIn])

    console.log(isLoggedIn)

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
                        isLoggedIn={isLoggedIn}
                        path="/"
                        component={DashboardRouter}
                    />
                </Switch>
            </div>
        </Router>
    )
}
