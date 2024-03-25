import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addToHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodo((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // const deleteHandler = (content: string) => {  // 내가 작업한 코드
  //   console.log(content);
  //   setTodo((prevTodos) => {
  //     return prevTodos.filter((prev) => {
  //       return prev.text !== content;
  //     });
  //   });
  // };
  const removeTodoHandler = (todoId: string) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addToHandler} />
      <Todos
        items={todos}
        // onDeleteTodo={deleteHandler} // 내가 작업한 코드
        onRemoveTodo={removeTodoHandler}
      />
    </div>
  );
};

export default App;
