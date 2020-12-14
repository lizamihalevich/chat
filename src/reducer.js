import { createReducer } from "@reduxjs/toolkit";
import { createRoomSuccess, joinRoomSuccess, setUsername } from "./actions";

const rootReducer = createReducer(
  {
    room: null,
    chatLog: [],
    username: null,
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
  }
);

export default rootReducer;
