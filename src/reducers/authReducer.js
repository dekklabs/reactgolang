import { types } from "../types/types";

const initialState = {
    error: false,
    message: "",
    token: "",
    status: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.login:
            return {
                error: action.payload.error,
                message : action.payload.message,
                status: true,
                token: action.payload.token
            }
        case types.logout:
            return initialState
        case types.logged:
            return {
                ...state,
                status: true
            }
        default:
            return state
    }
}