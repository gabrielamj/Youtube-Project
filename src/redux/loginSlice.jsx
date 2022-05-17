import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './loginService'

const initialState = {
  isLoading: false,
  isError: false,
  user: null,
}

const loginSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [logout.pending]: (state, action) => { 
      state.isLoading = true;
      state.isError = false;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = null;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default loginSlice.reducer