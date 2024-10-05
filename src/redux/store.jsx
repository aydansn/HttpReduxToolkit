import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import userReducer from "../redux/userSlice";
import postReducer from "../redux/postSlice";
import commentReducer from "../redux/commentSlice";
import todoReducer from "../redux/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    todo: todoReducer,
  },
});
