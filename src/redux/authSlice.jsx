import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;

      Swal.fire({
        icon: "success",
        title: "Successful login",
        text: "¡Welcome!",
        showConfirmButton: false,
        timer: 2500
      });
    },
    signInError: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Please verify your credentials.",
      });
    },
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("authInfo");
    },
  },
});

export const { signInSuccess, signInError, signOut } = authSlice.actions;

export default authSlice.reducer;
