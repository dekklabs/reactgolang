import jwt_decode from 'jwt-decode'

import { API_URL } from "../helpers/constants"
import { types } from "../types/types"
import { uiStartLoading, uiFinishLoading } from "./ui"
import { getProfile } from './user'

export const register = (user) => {
    const url = API_URL + "/register"

    const parans = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch(url, parans)
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

export const login = (user) => {    
    return (dispatch) => {
        const url = API_URL + "/login"
    
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
        dispatch(uiStartLoading())
        fetch(url, params)
            .then(res => res.json())
            .then(({error, message, token}) => {
                if( !error ) {
                    dispatch(loginType(error, message, token))
                    dispatch(uiFinishLoading())
                    dispatch(logged())
                    dispatch(getProfile(token))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loginType = (error, message, token) => ({
    type: types.login,
    payload: {
        error,
        message,
        token
    }
})

export const parseUser = (token) => {
    const data = jwt_decode(token)

    return data
}

export const logOutType = () => ({
    type : types.logout
})


export const logged = () => ({
    type: types.logged
})