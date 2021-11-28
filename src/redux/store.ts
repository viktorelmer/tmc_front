import {configureStore} from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store