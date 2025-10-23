import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  strokes: [],          // all strokes drawn
  currentTool: "pen",   // pen, eraser, line, rectangle, text, etc.
  color: "#000000",
  width: 2,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    addStroke: (state, action) => {
      state.strokes.push(action.payload);
    },
    setTool: (state, action) => {
      state.currentTool = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    clearCanvas: (state) => {
      state.strokes = [];
    },
    setStrokes: (state, action) => {
      state.strokes = action.payload;
    },
  },
});

export const { addStroke, setTool, setColor,  clearCanvas, setStrokes } = canvasSlice.actions;
export default canvasSlice.reducer;
