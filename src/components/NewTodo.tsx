import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // 타입스크립트는 useRef()훅 사용 시 레퍼런스가 연결될 곳을 알 수 없어 타입 지정이 필요 (바닐라JS에서는 그냥 써도 무방)
  // 레퍼런스로 다른 값이 할당될 수도 있기 때문에 default 값을 null이라고 설정해줘야 오류가 안남
  const subminHandler = (event: React.FormEvent) => {
    // React.FormEvent는 event 객체의 타입으로 폼 제출 이벤트를 수신하면 자동으로 받게 되도록 함.
    // 추가로 React.MouseEvent는 onClick 이벤트 리스너를 등록하면 받을 수 있음
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // 레퍼런스 current에 실제 값이 들어있음

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <Form onSubmit={subminHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </Form>
  );
};

const Form = styled.form`
  width: 40rem;
  margin: 2rem auto;
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #f7f5ef;
    border: none;
    border-bottom: 2px solid #494844;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0.5rem;
  }
  button {
    font: inherit;
    background-color: #ebb002;
    border: 1px solid #ebb002;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover,
    :active {
      background-color: #ebc002;
      border-color: #ebc002;
    }
  }
`;
export default NewTodo;
