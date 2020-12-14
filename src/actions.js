import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE } from "./config";

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
};
