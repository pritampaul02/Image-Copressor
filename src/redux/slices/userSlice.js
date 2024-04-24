import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axiosInterceptor.js";
import { base_url } from '../../main.jsx'

const initialState = {
    token: localStorage.getItem('token') || null,
    user: {},
    isAuthenticated: false,
    status: {
        authStatus: 'idle',
        logoutStatus: 'idle',
    },
    error: ""
}

// api call functions
export const register = createAsyncThunk('user/register', async ({ name, email, profilePic }) => {
    const response = await api.post(
        `${base_url}/api/user/google/signup`,
        {
            name,
            email,
            profilePic,
        }, {
        headers: {
            'Content-Type': 'application/json',

        },
        withCredentials: true
    }
    );
    console.log(response);
    return response.data;
})
export const logout = createAsyncThunk('user/logout', async () => {
    const response = await api.get(
        `${base_url}/api/user/logout`,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    console.log(response);
    return response.data;
})
export const getProfile = createAsyncThunk('user/getProfile', async () => {
    const response = await api.get(
        `${base_url}/api/user/profile`,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    console.log(response);
    return response.data;
})


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.status.authStatus = 'loading';
        })
            .addCase(register.fulfilled, (state, action) => {
                state.status.authStatus = 'success';
                state.user = action.payload.user;
                state.isAuthenticated = true
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(register.rejected, (state, action) => {
                state.status.authStatus = 'failed';
            })

            // logout
            .addCase(logout.pending, (state, action) => {
                state.status.authStatus = 'loading';
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.status.authStatus = 'success';
                state.user = {};
                state.isAuthenticated = false
                state.token = null;
                localStorage.setItem('token', null);
            })
            .addCase(logout.rejected, (state, action) => {
                state.status.authStatus = 'failed';
            })
            // get profile
            .addCase(getProfile.pending, (state, action) => {
                state.status.logoutStatus = 'loading';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.status.logoutStatus = 'success';
                state.user = action.payload.user;
                state.isAuthenticated = true
                state.token = action.payload.user.token;
                localStorage.setItem('token', action.payload.user.token);
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.status.logoutStatus = 'failed';
            })
    }
})


export default userSlice.reducer;


// Export any actions you need
export const selectUser = (state) => state.user;  
