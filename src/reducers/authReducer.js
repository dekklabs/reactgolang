import { types } from "../types/types";

const initialState = {
    error: false,
    message: "",
    status: false,
    token: "",
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.login:
            return {
                error: action.payload.error,
                message : action.payload.message,
                status: action.payload.status,
                token: action.payload.token
            }
        case types.logout:
            return initialState
        default:
            return state
    }
}