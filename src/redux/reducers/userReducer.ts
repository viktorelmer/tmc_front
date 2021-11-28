import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {U_INITIAL, USER_INITIAL_STATE, USER_SLICE_NAME} from "./constants";

const userSlice = createSlice({
    name: USER_SLICE_NAME,
    initialState: USER_INITIAL_STATE,
    reducers: {
        setUserData: (state, action: PayloadAction<U_INITIAL>) => {
            state = action.payload
        }
    }
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer