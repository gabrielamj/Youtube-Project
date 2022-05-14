import { configureStore } from '@reduxjs/toolkit';
import VideoReducer from './videoSlice';
import LoginReducer from './loginSlice'

export default configureStore({
  reducer: {
    video: VideoReducer,
    login: LoginReducer,
  },
});