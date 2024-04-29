import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.css";
import { TodoContext } from "../../contexts/TodoContext";

const TodoForm = () => {
  const context = useContext(TodoContext);

  const [content, setContent] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && content.length > 0) {
      context.update(
        {
          id: uuid(),
          title: content,
          state: false,
        },
        true
      );
      setContent("");
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
        value={content}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </div>
  );
};

export default TodoForm;
