import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axiosInterceptor.js";
import { base_url } from '../../main.jsx'

const initialState = {
    allImages: [],
    selectedImage: {},
    status: {
        uploadStatus: 'idle',
    },
    error: ""
}

// api call functions
export const saveImage = createAsyncThunk('image/saveImage', async (compressedImage) => {
    const response = await api.post(
        `${base_url}/api/image/save`,
        {
            imageData: compressedImage
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



const imageSlice = createSlice({
    name: 'image',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(saveImage.pending, (state, action) => {
            state.status.uploadStatus = 'loading';
        })
            .addCase(saveImage.fulfilled, (state, action) => {
                state.status.uploadStatus = 'success';
                state.allImages = action.payload.allImages;
                state.selectedImage = action.payload.image;
            })
            .addCase(saveImage.rejected, (state, action) => {
                state.status.uploadStatus = 'failed';
            })
    }
})


export default imageSlice.reducer;


// Export any actions you need
export const selectImage = (state) => state.image;  
