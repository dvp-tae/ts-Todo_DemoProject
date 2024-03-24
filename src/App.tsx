import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <NewTodo onAddTodo={addToHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
