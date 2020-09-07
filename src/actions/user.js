import { API_URL } from "../helpers/constants"

export const updateUser = (user, token) => {
    try {
        const url = `${API_URL}/update-user`
        
        const parans = {
            method: "PUT",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Bearer${token}`
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
    } catch (error) {
        console.log(error)
    }
}

export const getProfile = (token) => {
    try {
        const url = `${API_URL}/profile`

        const parans = {
            method: "GET",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Bearer${token}`
            },
        }

        return fetch(url, parans)
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    } catch (error) {
        console.log(error)
    }
}