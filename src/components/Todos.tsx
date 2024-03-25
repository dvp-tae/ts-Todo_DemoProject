import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <Ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          todo_id={item.id}
          todo_text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
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
