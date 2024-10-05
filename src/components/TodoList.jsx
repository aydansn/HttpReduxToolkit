import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/todoSlice";
import Todo from "../redux/Todo";
const TodoList = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((store) => store.todo);
  console.log(todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
