import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPeotries = createAsyncThunk("poetry/fetchPeotries", () => {
  return axios
    .get("http://localhost:3000/api/v1/poetry")
    .then((res) => res.data);
});

const initialState = {
  loading: false,
  poetries: [],
  error: "",
};

export const poetrySlice = createSlice({
  name: "poetry",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPeotries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPeotries.fulfilled, (state, action) => {
      state.loading = false;
      state.poetries = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPeotries.rejected, (state, action) => {
      state.loading = true;
      state.poetries = [];
      state.error = action.error.message;
    });
  },
});

export default poetrySlice.reducer;
