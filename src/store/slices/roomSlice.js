import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  participants: {}, // { socketId: userId }
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      state.participants = action.payload.participants || {};
    },
    updateParticipants: (state, action) => {
      state.participants = action.payload;
    },
    clearRoom: (state) => {
      state.roomId = null;
      state.participants = {};
    },
  },
});

export const { setRoom, updateParticipants, clearRoom } = roomSlice.actions;
export default roomSlice.reducer;
