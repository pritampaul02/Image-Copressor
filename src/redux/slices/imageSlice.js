import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axiosInterceptor.js";
import { base_url } from '../../main.jsx'

const initialState = {
    allImages: [],
    selectedImage: null,
    status: {
        uploadStatus: 'idle',
        getallImages:"idle"
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
export const getallImages = createAsyncThunk('image/getallImages', async () => {
    const response = await api.get(
        `${base_url}/api/image/all`,
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


            // get all images
            .addCase(getallImages.pending, (state, action) => {
                state.status.getallImages = 'loading';
            })
            .addCase(getallImages.fulfilled, (state, action) => {
                state.status.getallImages = 'success';

                state.allImages = action.payload.images;
            })
            .addCase(getallImages.rejected, (state, action) => {
                state.status.getallImages = 'failed';
            })
    }
})


export default imageSlice.reducer;


// Export any actions you need
export const selectImage = (state) => state.image;  
