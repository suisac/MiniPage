import { configureStore } from "@reduxjs/toolkit";
import blockReducer from './BlockSlice'

const appStore = configureStore({
  reducer: {
    block:blockReducer,
  },
});

export default appStore;