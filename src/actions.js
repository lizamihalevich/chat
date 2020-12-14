import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE } from "./config";
import { post } from "./utils/request";

const sendMessageRequest = createAction("SEND_MESSAGE_REQUEST");
const updateChatLog = createAction("UPDATE_CHAT_LOG");

const createRoomRequest = createAction("CREATE_ROOM_REQUEST");
const createRoomSuccess = createAction("CREATE_ROOM_SUCCESS");
const createRoomError = createAction("CREATE_ROOM_ERROR");

const createRoom = (roomName) => async (dispatch) => {
  dispatch(createRoomRequest());
  try {
    const response = await axios.get(`${API_BASE}/room?name=${roomName}`);
    dispatch(createRoomSuccess(response.data));
  } catch (error) {
    dispatch(createRoomError(error));
  }
};

const joinRoomRequest = createAction("JOIN_ROOM_REQUEST");
const joinRoomSuccess = createAction("JOIN_ROOM_SUCCESS");
const joinRoomError = createAction("JOIN_ROOM_ERROR");

const joinRoom = (roomId) => async (dispatch) => {
  dispatch(joinRoomRequest());
  try {
    const response = await axios.get(`${API_BASE}/room/${roomId}`);
    dispatch(joinRoomSuccess(response.data));
  } catch (error) {
    dispatch(joinRoomError(error));
  }
};

const setUsername = createAction("SET_USERNAME");

const setAuthData = createAction("SET_AUTH_DATA");
const failSignIn = createAction("FAIL_SIGN_IN");

const setAuthSuccess = createAction("SET_AUTH_SUCCESS");
const setAuthLogOut = createAction("SET_AUTH_LOG_OUT");

const signInUser = (authData) => async (dispatch) => {
  try {
    const response = await post("http://localhost:3000/signin", {
      data: authData,
    });
    dispatch(setAuthData(response.data));
  } catch (e) {
    dispatch(failSignIn());
  }
};

const addNewUser = createAction("ADD_NEW_USER");
const failAddNewUser = createAction("FAIL_ADD_NEW_USER");

const addNewUserToDatabase = (user) => async (dispatch) => {
  try {
    const response = await post("http://localhost:3000/register", {
      data: user,
    });
    dispatch(addNewUser(response.data));
  } catch (e) {
    dispatch(failAddNewUser());
  }
};

export {
  sendMessageRequest,
  updateChatLog,
  createRoomRequest,
  createRoomSuccess,
  createRoomError,
  createRoom,
  joinRoomRequest,
  joinRoomSuccess,
  joinRoomError,
  joinRoom,
  setUsername,
  setAuthData,
  signInUser,
  failSignIn,
  setAuthSuccess,
  setAuthLogOut,
  addNewUser,
  addNewUserToDatabase,
};
