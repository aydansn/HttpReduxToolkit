import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import CommentList from "./components/CommentList";
import Todo from "./redux/Todo";

function App() {
  return (
    <div>
      <UserList />
      <PostList />
      <CommentList />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
