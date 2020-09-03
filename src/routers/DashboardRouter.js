import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Navigation } from '../components/ui/Navigation'
import { Contact } from '../pages/contact/Contact'

export const DashboardRouter = () => {
    return (
        <div className=''>
            <Navigation />
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/dashboard" />
            </Switch>
        </div>
    )
}
