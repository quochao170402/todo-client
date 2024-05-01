import { useContext, useState } from "react";
import CrossIcon from "../../assets/icon-cross.svg";
import "./style.css";
import { TodoContext } from "../../contexts/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
  const context = useContext(TodoContext);
  const { id, title, state } = props.todo;

  const [todoState, setTodoState] = useState(state);

  const handleUpdateTodoState = () => {
    const currentState = !todoState;
    setTodoState(currentState);
    const current = context.items.find((x) => x.id === id);
    if (current) {
      current.state = currentState;
    }
    context.handleFilter(context.items, context.currentFilterType);
  };

  const handleRemoveTodo = () => {
    context.update(props.todo, false);
  };

  return (
    <div className="todoItem">
      <div className="todo" onClick={handleUpdateTodoState}>
        <input
          type="checkbox"
          className="circle"
          checked={todoState}
          readOnly
        />
        <span className="content">{title}</span>
      </div>
      <img
        src={CrossIcon}
        alt=""
        className="remove"
        onClick={handleRemoveTodo}
      />
    </div>
  );
};

export default TodoItem;
