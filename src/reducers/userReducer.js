import { types } from "../types/types";

const initialState = {
    error: false,
    message: "",
    user: {}
}

export const userReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case types.userLoad:
            return {
                error   : action.payload.error,
                message : action.payload.message,
                user    : action.payload.user
            }
        case types.userClean:
            return initialState
        default:
            return state
    }
}