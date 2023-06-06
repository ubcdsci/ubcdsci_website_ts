// Library imports.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Local imports.
import authService from './authService';


const user : { username : string, password : string } = JSON.parse(localStorage.getItem('user') || '{}');

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk('auth/register', async (user : UserFormData, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error : any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    return thunkAPI.rejectWithValue(message);
  }
});

export const login = createAsyncThunk('auth/login', async (user : UserFormData, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error : any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const verifyToken = createAsyncThunk('auth/verify', async (token: string, thunkAPI) => {
  try {
    return await authService.verifyToken(token);
  } catch (error : any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    return thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(register.rejected, (state: any, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})

			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state: any, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})

			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			})

			.addCase(verifyToken.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(verifyToken.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(verifyToken.rejected, (state: any, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			});
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
