import "./style.css";

const TodoForm = () => {
  return (
    <div className="todoForm">
      <input type="checkbox" className="circleForm" disabled />
      <input
        type="text"
        name=""
        id="newTodo"
        placeholder="Create new todo..."
      />
    </div>
  );
};

export default TodoForm;
