import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  loading: false,
};

export const getAllTodos = createAsyncThunk("todos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

export const todolice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const {} = todolice.actions;
export default todolice.reducer;
