import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: 0,
    loginDate: 0,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.loginDate = new Date();
    },

    logoutUser: (state) => {
      (state.user = 0), (loginDate = 0);
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
