import React from "react";

const TodoText = ({
  todo_id,
  todo_text,
}: {
  todo_id: string;
  todo_text: string;
}) => {
  return <li key={todo_id}>{todo_text}</li>;
};

export default TodoText;
