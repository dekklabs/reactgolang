import { API_URL } from "../helpers/constants"
import { parseToken } from "../helpers/getToken"
import { types } from "../types/types"

export const updateUser = (user) => {
    return async ( dispatch, getState ) => {
        try {
            const { token } = getState().auth
    
            const url = `${API_URL}/update-user`
    
            const parans = {
                method: "PUT",
                headers : {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer${token}`
                },
                body: JSON.stringify(user)
            }
            await fetch(url, parans)
            dispatch(getProfile(token))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProfile = (token) => {
    return async (dispatch) => {        
        try {
            const { id } = parseToken(token)

            if (id === 0) {
                console.log("No id")
            }
    
            const url = `${API_URL}/profile?id=${id}`
    
            const parans = {
                method: "GET",
                headers : {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer${token}`
                },
            }

            const data = await fetch( url, parans )
            const { error, message, user } = await data.json()

            if (error) {
                console.log("Hubo un error :,c")
                console.log(message)
            }

            dispatch(getUser(error, message, user))
        } catch (error) {
            console.log(error)
        }
    }
}

export const cleanUser = () => ({
    type: types.userClean
})

const getUser = (error, message, user) => ({
    type: types.userLoad,
    payload: {
        error,
        message,
        user
    }
})