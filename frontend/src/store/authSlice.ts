import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../api/axios';

// Define the shape of the AuthState
export interface AuthState {
  user: { email: string; username: string; token: string } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state for the Auth slice
const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

// Async thunk for user signup
export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, username, password }: { email: string; username: string; password: string }) => {
    const response = await axiosInstance.post('/auth/signup', { email, username, password });
    return response.data;
  }
);

// Async thunk for user signin
export const signin = createAsyncThunk(
  'auth/signin',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axiosInstance.post('/auth/signin', { email, password });
    return response.data;
  }
);

// Create the Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<{ email: string; username: string; token: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(signin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signin.fulfilled, (state, action: PayloadAction<{ email: string; username: string; token: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default authSlice.reducer;
