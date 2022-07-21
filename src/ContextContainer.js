import React, { createContext, useState, useEffect } from "react";

const DataListContext = createContext();

export const DataListProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
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
