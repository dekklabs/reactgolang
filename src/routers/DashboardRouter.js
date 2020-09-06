import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Navigation } from '../components/ui/Navigation'
import { Contact } from '../pages/contact/Contact'
import { Profile } from '../pages/profile/Profile'
import { Footer } from '../components/footer/Footer'

export const DashboardRouter = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/profile" component={Profile} />
                <Redirect to="/dashboard" />
            </Switch>
            <Footer />
        </div>
    )
}
