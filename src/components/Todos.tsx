import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
// import TodoText from "./TodoText";

const Todos = ({ items }: { items: Todo[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem todo_id={item.id} todo_text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
