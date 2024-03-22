import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // 타입스크립트는 useRef()훅 사용 시 레퍼런스가 연결될 곳을 알 수 없어 타입 지정이 필요 (바닐라JS에서는 그냥 써도 무방)
  // 레퍼런스로 다른 값이 할당될 수도 있기 때문에 default 값을 null이라고 설정해줘야 오류가 안남
  const subminHandler = (event: React.FormEvent) => {
    // React.FormEvent는 event 객체의 타입으로 폼 제출 이벤트를 수신하면 자동으로 받게 되도록 함.
    // 추가로 React.MouseEvent는 onClick 이벤트 리스너를 등록하면 받을 수 있음
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value; // 레퍼런스 current에 실제 값이 들어있음

    if (enteredText?.trim().length === 0) {
      return;
    }
  };
  return (
    <form onSubmit={subminHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
    </form>
  );
};

export default NewTodo;
