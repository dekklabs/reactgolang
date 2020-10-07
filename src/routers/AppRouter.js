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

    const { message } = useSelector(state => state.auth)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        exact 
                        path="/auth/login"
                        isLoggedIn={message}
                        component={Login}
                    />

                    <PublicRoutes
                        exact 
                        path="/auth/register" 
                        isLoggedIn={message}
                        component={Register}
                    />

                    <PrivateRoutes
                        path="/"
                        isLoggedIn={message}
                        component={DashboardRouter}
                    />
                </Switch>
            </div>
        </Router>
    )
}
