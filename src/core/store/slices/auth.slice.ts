import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetUser } from '../../types';
import { authorize } from '../actions';

export interface AuthState {
  isLoading: boolean,
  error: string,
  userContext: GetUser | null,
}

const initialState: AuthState = {
  isLoading: false,
  error: '',
  userContext: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authorize.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [authorize.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [authorize.fulfilled.type]: (state, action: PayloadAction<GetUser>) => {
      state.userContext = action.payload;
      state.isLoading = false;
      state.error = '';
    }
  }
});

export const authReducer = authSlice.reducer;
