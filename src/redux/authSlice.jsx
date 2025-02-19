import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload; // Update user data
      state.isAuthenticated = true; // Mark as logged in
    },
    logoutSuccess: (state) => {
      state.user = null; // Clear user data
      state.isAuthenticated = false; // Mark as logged out
      localStorage.removeItem("authToken");
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
