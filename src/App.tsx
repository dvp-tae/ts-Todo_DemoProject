import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";

const App = () => {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
    new Todo("Learn JavaScript"),
    new Todo("Learn NextJs"),
  ];

  const addToHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addToHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
