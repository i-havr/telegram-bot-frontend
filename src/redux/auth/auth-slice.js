import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, () => {})
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, () => {})
      .addCase(logOut.pending, () => {})
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, () => {})
      .addCase(refreshCurrentUser.pending, (state) => {
        state.isRefreshingCurrentUser = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshingCurrentUser = false;
      })
      .addCase(refreshCurrentUser.rejected, (state) => {
        state.isRefreshingCurrentUser = false;
      });
  },
});

export default authSlice.reducer;
