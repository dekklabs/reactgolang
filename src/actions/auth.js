import { API_URL } from "../helpers/constants"
import { types } from "../types/types"
import { uiStartLoading, uiFinishLoading } from "./ui"

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

    const url = API_URL + "/login"

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    return (dispatch) => {
        dispatch(uiStartLoading())
        fetch(url, params)
            .then(res => res.json())
            .then(({error, message, status, token}) => {
                if( !error ) {
                    dispatch(loginType(error, message, status, token))
                    dispatch(uiFinishLoading())
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loginType = (error, message, status, token) => ({
    type: types.login,
    payload: {
        error,
        message,
        status,
        token
    }
})

export const logOutType = () => ({
    type : types.logout
})