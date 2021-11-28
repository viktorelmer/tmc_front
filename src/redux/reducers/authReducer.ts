import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AUTH_INITIAL_STATE, AUTH_SLICE_NAME} from "./constants";


const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState: AUTH_INITIAL_STATE,
    reducers: {
        setAuthState: (state, action: PayloadAction<boolean>) => {
            state = action.payload
        }
    }
})

export const {setAuthState} = authSlice.actions

export default authSlice.reducer