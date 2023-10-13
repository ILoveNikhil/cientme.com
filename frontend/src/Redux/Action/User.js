import axios from "axios";
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../Reducer/UserReducer"; // Import the action creators from the UserReducer slice

export const SignupUser = (formData) => async (dispatch) => {
  try {
    dispatch(signupRequest()); // Dispatch the signupRequest action creator
    const { data } = await axios.post(
      `${server}/api/v1/signup`,
      { formData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(signupSuccess(data.user)); // Dispatch the signupSuccess action creator with the payload
  } catch (error) {
    dispatch(signupFailure(error.response.data.message)); // Dispatch the signupFailure action creator with the payload
  }
};

export const LoginUser = (formData) => async (dispatch) => {
  try {
    dispatch(loginRequest()); // Dispatch the loginRequest action creator
    const { data } = await axios.post(
      `${server}/api/v1/login`,
      { formData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(loginSuccess(data.user)); // Dispatch the loginSuccess action creator with the payload
  } catch (error) {
    dispatch(loginFailure(error.response.data.message)); // Dispatch the loginFailure action creator with the payload
  }
};
