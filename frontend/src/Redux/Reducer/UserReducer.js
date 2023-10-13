// import {
//   SIGNUP_USER_REQUEST,
//   SIGNUP_USER_SUCCESS,
//   SIGNUP_USER_FAIL,
//   LOGIN_USER_REQUEST,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_FAIL,
//   FORGOT_PASSWORD_USER_REQUEST,
//   FORGOT_PASSWORD_USER_SUCCESS,
//   FORGOT_PASSWORD_USER_FAIL,
//   RESET_PASSWORD_USER_REQUEST,
//   RESET_PASSWORD_USER_SUCCESS,
//   RESET_PASSWORD_USER_FAIL,
//   UPDATE_PASSWORD_USER_REQUEST,
//   UPDATE_PASSWORD_USER_SUCCESS,
//   UPDATE_PASSWORD_USER_FAIL,
//   LOGOUT_USER_REQUEST,
//   LOGOUT_USER_SUCCESS,
//   LOGOUT_USER_FAIL,
//   LOAD_USER_REQUEST,
//   LOAD_USER_SUCCESS,
//   LOAD_USER_FAIL,
//   PROFILE_USER_REQUEST,
//   PROFILE_USER_SUCCESS,
//   PROFILE_USER_FAIL,
//   PROFILE_UPDATE_USER_REQUEST,
//   PROFILE_UPDATE_USER_SUCCESS,
//   PROFILE_UPDATE_USER_FAIL,
// } from "../constants/UserConstants";

import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  // Signup
  SignupRequest: (state) => {
    state.loading = true;
  },
  SignupSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  SignupFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  // Login
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  // Forget Password
  forgotPasswordRequest: (state) => {
    state.loading = true;
  },
  forgotPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  forgotPasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  // Reset Password
  resetPasswordRequest: (state) => {
    state.loading = true;
  },
  resetPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  resetPasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  // Update Password
  updatePasswordRequest: (state) => {
    state.loading = true;
  },
  updatePasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updatePasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  // loadUser
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  // Logout
  LogoutUserRequest: (state) => {
    state.loading = true;
  },
  LogoutUserSuccess: (state) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  LogoutUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
