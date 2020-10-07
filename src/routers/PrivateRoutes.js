import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from "prop-types";

export const PrivateRoutes = ({
    isLoggedIn,
    component : Component,
    ...rest
}) => {
    return (
        <Route
            { ...rest }
            component = {(props) => (
                (isLoggedIn === "ok")
                ? <Component {...props} />
                : <Redirect to="/auth/login" />
            )}
        />
    )
}

PrivateRoutes.propTypes = {
    isLoggedIn : PropTypes.string.isRequired,
    component : PropTypes.func.isRequired
}