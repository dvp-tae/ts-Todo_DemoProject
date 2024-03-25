import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const Todos = ({
  items,
  // onDeleteTodo, // 내가 작업한 코드
  onRemoveTodo,
}: {
  items: Todo[];
  // onDeleteTodo: (content: string) => void; // 내가 작업한 코드
  onRemoveTodo: (id: string) => void;
}) => {
  // const delTodo = (content: string) => { // 내가 작업한 코드
  //   onDeleteTodo(content);
  // };
  return (
    <Ul>
      {items.map((item) => (
        <TodoItem
          todo_id={item.id}
          todo_text={item.text}
          // delcontent={delTodo}  // 내가 작업한 코드
          onRemoveTodo={onRemoveTodo}
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
