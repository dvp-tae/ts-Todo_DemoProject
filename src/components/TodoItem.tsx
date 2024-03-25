import React from "react";
import styled from "styled-components";

const TodoItem = (props: {
  todo_id: string;
  todo_text: string;
  onRemoveTodo: () => void;
}) => {
  return <Li onClick={props.onRemoveTodo}>{props.todo_text}</Li>;
};

const Li = styled.li`
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
`;
export default TodoItem;
