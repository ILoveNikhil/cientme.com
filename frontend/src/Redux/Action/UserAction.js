import axios from "axios";
// import { server } from "../Store/Store";

//signup
export const SignupUser =
  (fullName, userName, phoneNumber, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "SignupRequest",
      });
      const { data } = await axios.post(
        `/api/v1/user/signup`,
        { fullName, userName, phoneNumber, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "SignupSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "SignupFailure",
        payload: error.response.data.message,
      });
    }
  };
//login
export const LoginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(
      `/api/v1/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};
// forgotPassword
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "forgotPasswordRequest",
    });
    const { data } = await axios.post(
      "/api/v1/user/password/forgot",
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "forgotPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "forgotPasswordFailure",
      payload: error.response.data.message,
    });
  }
};
// resetPassword
export const resetPassword =
  (token, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "resetPasswordRequest",
      });
      const { data } = await axios.put(
        `/api/v1/user/password/reset/${token}`,
        {
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "resetPasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "resetPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };
// updatePassword
export const updatePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePasswordRequest",
      });
      const { data } = await axios.put(
        "/api/v1/user/password/update",
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };
//loadUser -- Get user data
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`/api/v1/user/me`);
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};
// logout
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });
    await axios.get("/api/v1/user/logout");
    dispatch({
      type: "LogoutUserSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};
