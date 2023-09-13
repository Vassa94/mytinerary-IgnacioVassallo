import axios from "axios";
import { signInSuccess, signInError } from "../redux/authSlice";
import { signOut as signOutAction } from "../redux/authSlice";

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
      dispatch({ type: "SIGN_IN_SUCCESS", payload: response.data });
      Swal.fire({
        icon: "success",
        title: "User created!",
        text: "Welcome!",
      });
    } catch (error) {
      console.log(error);
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
