import React, { createContext, useState, useEffect } from "react";

const DataListContext = createContext();

export const DataListProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    onCreate: new Date().toISOString(),
    onComplete: false,
  });

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleOnDone = (id) => {
    const onDone = todos.map((items) => {
      return items.id === id
        ? { ...items, onComplete: items.onComplete ? false : true }
        : items;
    });

    setTodos(onDone);
  };

  const handleDelete = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  };

  const [isEditing, setIsEditing] = useState(false);

  return (
    <DataListContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        handleOnDone,
        handleDelete,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </DataListContext.Provider>
  );
};

export default DataListContext;
