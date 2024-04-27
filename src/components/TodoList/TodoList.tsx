import TodoItem from "../TodoItem/TodoItem";
import "./style.css";
interface TodoListProps {
  Items: Todo[];
}

const TodoList = (props: TodoListProps) => {
  const items = props.Items;
  return (
    <div className="todoList">
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
