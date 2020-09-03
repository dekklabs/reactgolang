import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import { DashboardRouter } from './DashboardRouter'
import { Register } from '../pages/auth/Register'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/auth/register" component={Register} />

                    <Route path="/" component={DashboardRouter} />
                </Switch>
            </div>
        </Router>
    )
}
