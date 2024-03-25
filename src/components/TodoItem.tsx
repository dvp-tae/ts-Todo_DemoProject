// import React, { useRef } from "react";
import styled from "styled-components";

const TodoItem = (props: {
  todo_id: string;
  todo_text: string;
  // delcontent: (content: string) => void; // 내가 작업한 코드
  onRemoveTodo: (id: string) => void;
}) => {
  // const todoListItemRef = useRef<HTMLLIElement>(null);  // 내가 작업한 코드

  // const deleteItem = () => {   // 내가 작업한 코드
  //   const deleteText = todoListItemRef.current?.textContent as string;
  //   props.delcontent(deleteText);
  // };

  return (
    // <Li onClick={deleteItem} ref={todoListItemRef}>  // 내가 작업한 코드
    //   {props.todo_text}
    // </Li>
    <Li onClick={props.onRemoveTodo.bind(null, props.todo_id)}>
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
