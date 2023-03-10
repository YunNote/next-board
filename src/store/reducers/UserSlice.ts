import { createSlice } from "@reduxjs/toolkit";

interface UserJwt {
    token: string
}

const initialState: UserJwt = {
    token: "11"
}

const userJwtSlice = createSlice({
    name: 'userJwt',
    initialState,
    reducers: {
        updateToken: (state, action) => {
            
            state.token = action.payload;
            return state;
        }
    }
})


export const {updateToken} = userJwtSlice.actions;
export default userJwtSlice.reducer;