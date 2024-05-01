import { useContext } from "react";
import { FilterType, TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import "./style.css";

const TodoList = () => {
  const context = useContext(TodoContext);

  const items =
    context.currentFilterType === FilterType.All
      ? context.items
      : context.filter;
  return (
    <div className="todoList">
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
