import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPoetry = createAsyncThunk(
  "poetry/createPoetry",
  async (data) => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/poetry",
      data
    );
    return response.data;
  }
);

const initialState = {
  loading: false,
  poetry: [],
  error: "",
};

export const createPoetrySlice = createSlice({
  name: "createPoetry",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createPoetry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPoetry.fulfilled, (state, action) => {
      state.loading = false;
      state.poetry = action.payload;
      state.error = "";
    });
    builder.addCase(createPoetry.rejected, (state, action) => {
      state.loading = true;
      state.poetry = [];
      state.error = action.error.message;
    });
  },
});

export default createPoetrySlice.reducer;
