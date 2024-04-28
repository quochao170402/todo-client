import { useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/Context";
import TodoItem from "../TodoItem/TodoItem";
import "./style.css";

const TodoList = () => {
  const items = useContext(TodoContext);
  console.log("🚀 ~ TodoList ~ items:", items);
  useEffect(() => {
    // Do something when context is updated
    console.log("Context updated:", items);
  }, [items]);

  return (
    <div className="todoList">
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
