import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer
})

export default persistReducer(persistConfig, rootReducer)