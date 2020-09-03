import { API_URL, TOKEN } from "../helpers/constants"
import { types } from "../types/types"
import { saveSate } from "../helpers/getToken"

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
        fetch(url, params)
            .then(res => res.json())
            .then(({error, message, token}) => {
                if( !error ) {
                    dispatch(loginType(error, message, token))
                    // saveSate(token)
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

export const logOutType = () => ({
    type : types.logout
})