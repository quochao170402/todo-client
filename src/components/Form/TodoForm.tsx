import { useContext, useState } from "react";
import "./style.css";
import { TodoContext } from "../../contexts/Context";
import { v4 as uuid } from "uuid";

const TodoForm = () => {
  const context = useContext(TodoContext);
  const [content, setContent] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && content.length > 0) {
      context.push({
        id: uuid(),
        title: content,
        state: false,
      });
      setContent("");
      console.log("🚀 ~ handleKeyDown ~ context;:", context);
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
