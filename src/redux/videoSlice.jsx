import { createSlice } from '@reduxjs/toolkit'
import { fetchVideo } from './videoService';

const initialState = {
    videos: null,
    isLoading: true,
    error: null,
    favouriteList: [],
}

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addFavourite (state, action) {
      state.favouriteList.push(action.payload);
    },
  },
  extraReducers: {
    [fetchVideo.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchVideo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.videos = action.payload.items;
    },
    [fetchVideo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {addFavourite} = videoSlice.actions

export default videoSlice.reducer