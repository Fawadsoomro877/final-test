import { configureStore } from "@reduxjs/toolkit";
import poetryReducer from "../features/poetries/PoetrySlice";
import createPoetryReducer from "../features/postPeotry/createPoetrySlice";
const store = configureStore({
  reducer: {
    poetry: poetryReducer,
    createPoetry: createPoetryReducer,
  },
});

export default store;
