import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer
})

// export default combineReducers({
//     auth: authReducer
// })

export default persistReducer(persistConfig, rootReducer)