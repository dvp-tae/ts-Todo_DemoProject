import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const Todos = ({ items }: { items: Todo[] }) => {
  return (
    <Ul>
      {items.map((item) => (
        <TodoItem key={item.id} todo_text={item.text} />
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
