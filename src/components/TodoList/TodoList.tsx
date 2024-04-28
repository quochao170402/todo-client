import { useContext, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./style.css";
import { TodoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const context = useContext(TodoContext);
  console.log("🚀 ~ TodoList ~ items:", context);
  useEffect(() => {
    // Do something when context is updated
    context.update;
  }, [context.items]);

  return (
    <div className="todoList">
      {context.items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
