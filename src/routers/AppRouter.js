import React from 'react'
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

    const { status } = useSelector(state => state.auth)

    console.log(isLoggedIn)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        exact 
                        path="/auth/login"
                        isLoggedIn={status}
                        component={Login}
                    />

                    <PublicRoutes
                        exact 
                        path="/auth/register" 
                        isLoggedIn={status}
                        component={Register}
                    />

                    <PrivateRoutes
                        path="/"
                        isLoggedIn={status}
                        component={DashboardRouter}
                    />
                </Switch>
            </div>
        </Router>
    )
}
