import React, { ReactNode, useState } from "react";
import Todo from "../models/Todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type MycomponentProps = {
  // React.FC 사용을 지양하기 위해 children의 타입 지정
  children: ReactNode;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = ({ children }: MycomponentProps) => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addToHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodo((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addToHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
