import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import roomReducer from "./slices/roomSlice";
import canvasReducer from "./slices/canvasSlice";
import chatReducer from "./slices/chatSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    canvas: canvasReducer,
    chat: chatReducer,
  },
});

export default store;
