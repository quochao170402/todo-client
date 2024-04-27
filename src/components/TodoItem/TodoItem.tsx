import { useState } from "react";
import CrossIcon from "../../assets/icon-cross.svg";
import "./style.css";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
  const { title, state } = props.todo;

  const [todoState, setTodoState] = useState(state);
  console.log("🚀 ~ TodoItem ~ todoState:", todoState);

  const clickHandle = () => {
    const currentState = !todoState;
    setTodoState(currentState);
  };

  return (
    <div className="todoItem">
      <div className="todo" onClick={clickHandle}>
        <input type="checkbox" className="circle" checked={todoState} />

        <span className="content">{title}</span>
      </div>
      <img src={CrossIcon} alt="" className="remove" />
    </div>
  );
};

export default TodoItem;
