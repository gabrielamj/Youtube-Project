import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVideo = createAsyncThunk('video/fetchVideo', async (searchQuery) => {
  const response = await axios.get(
    // eslint-disable-next-line max-len
    `https://youtube.googleapis.com/youtube/v3/search?&q=${searchQuery}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_APY_KEY}&maxResults=6`
  );
  return response.data;
});
