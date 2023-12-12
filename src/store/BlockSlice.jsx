import { createSlice } from "@reduxjs/toolkit";

const BlockSlice = createSlice({
  name: "block",
  initialState: {
    blockArray: JSON.parse(localStorage.getItem('MyWidgetArray')) || [],
  },
  reducers: {
    addBlock: (state, action) => {

      state.blockArray.push(action.payload);
    },
    removeBlock: (state, action) => {
      state.blockArray.splice(action.payload,1);

    },
    updateBlock: (state, action) => {
        state.blockArray.splice(action.payload.id,1);
        state.blockArray.push(action.payload.arr);
      },
  },
});

export const { addBlock, removeBlock,updateBlock } = BlockSlice.actions;

export default BlockSlice.reducer;