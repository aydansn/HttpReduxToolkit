import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
};

export const getAllPosts = createAsyncThunk("posts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
