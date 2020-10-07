import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import { userReducer } from "../reducers/userReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['auth', 'user']
}

const rootReducer = combineReducers({
    auth : authReducer,
    ui   : uiReducer,
    user : userReducer
})

export default persistReducer(persistConfig, rootReducer)