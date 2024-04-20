import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    isAuthenticted: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

    },
})


export default userSlice.reducer;


// Export any actions you need
export const selectUser = (state) => state.user;  
