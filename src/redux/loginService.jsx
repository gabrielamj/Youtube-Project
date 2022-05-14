import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, logoutApi } from '../mocks/fakeAPI';

export const login = createAsyncThunk(
  'session/sessionLogin',
  async ({username, password }) => {
    const response = await loginApi(username, password);
    return response;
  }
);

export const logout = createAsyncThunk(
  'session/sessionLogout',
  async () => {
    const response = await logoutApi();
    return response;
  }
);