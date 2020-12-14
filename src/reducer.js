import { createReducer } from "@reduxjs/toolkit";
import {
  createRoomSuccess,
  joinRoomSuccess,
  setUsername,
  setAuthData,
  failSignIn,
  setAuthSuccess,
  setAuthLogOut,
  addNewUser,
} from "./actions";

const rootReducer = createReducer(
  {
    room: null,
    chatLog: [],
    username: null,
    authData: {},
    authSuccess: false,
    authTry: false,
    newUserData: {},
  },
  {
    [createRoomSuccess]: (state, action) => {
      state.room = action.payload;
    },

    [joinRoomSuccess]: (state, action) => {
      state.room = action.payload;
    },

    [setUsername]: (state, action) => {
      state.username = action.payload;
    },

    [setAuthData]: (state, action) => {
      state.authData = action.payload;
      state.authSuccess = true;
      state.authTry = true;
    },

    [failSignIn]: (state) => {
      state.authTry = true;
    },

    [setAuthSuccess]: (state) => {
      state.authSuccess = true;
    },

    [setAuthLogOut]: (state) => {
      state.authSuccess = false;
    },

    [addNewUser]: (state, action) => {
      state.newUserData = action.payload;
    },
  }
);

export default rootReducer;
