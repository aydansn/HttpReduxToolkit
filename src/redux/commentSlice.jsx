import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  loading: false,
};

export const getAllComments = createAsyncThunk("comments", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return response.data;
});

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
