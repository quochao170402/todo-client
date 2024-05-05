import { useContext, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.css";
import { TodoContext } from "../../contexts/TodoContext";

const TodoForm = () => {
  const context = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      if (event.key === "Enter" && value.length > 0) {
        context.update(
          {
            id: uuid(),
            title: value,
            state: false,
          },
          true
        );

        inputRef.current.value = "";
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="todoForm">
      <input type="checkbox" className="circleForm" disabled />
      <input
        type="text"
        name=""
        id="newTodo"
        placeholder="Create new todo..."
        onKeyDown={(event) => handleKeyDown(event)}
        ref={inputRef}
      />
    </div>
  );
};

export default TodoForm;
