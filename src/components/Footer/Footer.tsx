import { useContext } from "react";
import { FilterType, TodoContext } from "../../contexts/TodoContext";
import "./style.css";
const Footer = () => {
  const context = useContext(TodoContext);
  const quantity = context.filter.length;

  const handleClearComplete = () => {
    context.items = context.items.filter((x) => !x.state);
  };

  return (
    <div className="footer">
      <div className="quantity">{quantity} items left</div>
      <div className="filterContainer">
        <button
          onClick={() => context.handleFilter(FilterType.All)}
          className="todoButton"
        >
          All
        </button>
        <button
          onClick={() => context.handleFilter(FilterType.Active)}
          className="todoButton"
        >
          Active
        </button>
        <button
          onClick={() => context.handleFilter(FilterType.Complete)}
          className="todoButton"
        >
          Completed
        </button>
      </div>
      <button onClick={handleClearComplete} className="todoButton">
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
