import TodoButton from "../Button/TodoButton";
import "./style.css"
const Filter = () => {
  return (
    <div className="filterContainer">
      <TodoButton name={"All"} />
      <TodoButton name={"Active"} />
      <TodoButton name={"Completed"} />
    </div>
  );
};

export default Filter;
