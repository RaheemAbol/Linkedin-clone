import { createSlice } from '@reduxjs/toolkit';

// Inside of userSlice we will store the user as an object and set its value to null\\
// To avoid prop drilling we pass the user into the data layer by creating a slice with createSlice \\
// Inside of our reducers we have two actions Login & Logout \\
// our selector selectUser will allow us to pull the user info other places \\

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login:( state, action ) => {
      state.user = action.payload;
    },
   
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
