import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  Items: Todo[];
}

const TodoList = (props: TodoListProps) => {
  const items = props.Items;
  return (
    <div>
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
