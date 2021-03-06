import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from "prop-types";

export const PublicRoutes = ({
    isLoggedIn,
    component : Component,
    ...rest
}) => {
    return (
        <Route
            { ...rest }
            component = {(props) => (
                (isLoggedIn === "")
                ? <Component {...props} />
                : <Redirect to="/dashboard" />
            )}
        />
    )
}

PublicRoutes.propTypes = {
    isLoggedIn : PropTypes.string.isRequired,
    component : PropTypes.func.isRequired
}