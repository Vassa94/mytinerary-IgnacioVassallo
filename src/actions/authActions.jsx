import axios from "axios";
import { signInSuccess, signInError } from "../redux/authSlice";
import { signOut as signOutAction } from "../redux/authSlice";
import Swal from "sweetalert2";

export const signIn = (credentials) => {
  return async (dispatch) => {
    try {
      console.log(credentials);
      const response = await axios.post(
        "http://localhost:3000/auth/signin",
        credentials
      );
      console.log(response.data);
      dispatch(signInSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(signInError(error));
    }
  };
};

export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      console.log(userData);
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        userData
      );
      const { email,password } = response.data
      console.log(response.data);
      dispatch(signIn({ email,password }));
      Swal.fire({
        icon: "success",
        title: "User created!",
        text: "Welcome!",
        showConfirmButton: false,
        timer: 2500
      });
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400){
        Swal.fire({
          icon: "warning",
          title: "Login failed",
          text: "User already exist.",
        });
      }else{
        Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Please verify your credentials.",
      });
      }
      dispatch({ type: "SIGN_UP_ERROR", error });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch(signOutAction());
    } catch (error) {
      console.log(error);
    }
  };
};
