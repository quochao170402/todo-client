import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import "./style.css";

const TodoList = () => {
  const context = useContext(TodoContext);

  const items = context.filter.length == 0 ? context.items : context.filter;
  console.log("🚀 ~ TodoList ~ items:", items);
  return (
    <div className="todoList">
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
