import React, { useRef } from "react";
import styled from "styled-components";

const TodoItem = (props: {
  todo_id: string;
  todo_text: string;
  delcontent: (content: string) => void;
}) => {
  const todoListItemRef = useRef<HTMLLIElement>(null);

  const deleteItem = () => {
    const deleteText = todoListItemRef.current?.textContent as string;
    props.delcontent(deleteText);
  };

  return (
    <Li onClick={deleteItem} ref={todoListItemRef}>
      {props.todo_text}
    </Li>
  );
};

const Li = styled.li`
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
`;
export default TodoItem;
