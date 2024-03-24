import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const Todos = ({
  items,
  onDeleteTodo,
}: {
  items: Todo[];
  onDeleteTodo: (content: string) => void;
}) => {
  const delTodo = (content: string) => {
    onDeleteTodo(content);
  };
  return (
    <Ul>
      {items.map((item) => (
        <TodoItem
          todo_id={item.id}
          todo_text={item.text}
          delcontent={delTodo}
        />
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  width: 40rem;
`;
export default Todos;
