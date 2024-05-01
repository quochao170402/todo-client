import { useContext } from "react";
import { FilterType, TodoContext } from "../../contexts/TodoContext";
import TodoButton from "../TodoButton/TodoButton";
import "./style.css";
const Footer = () => {
  const context = useContext(TodoContext);
  const quantity = context.filter.length;

  return (
    <div className="footer">
      <div className="quantity">{quantity} items left</div>
      <div className="filterContainer">
        <TodoButton
          name={FilterType.All}
          isChecked={context.currentFilterType === FilterType.All}
          handleClick={() =>
            context.handleFilter(context.items, FilterType.All)
          }
        />
        <TodoButton
          name={FilterType.Active}
          isChecked={context.currentFilterType === FilterType.Active}
          handleClick={() =>
            context.handleFilter(context.items, FilterType.Active)
          }
        />
        <TodoButton
          name={FilterType.Complete}
          isChecked={context.currentFilterType === FilterType.Complete}
          handleClick={() =>
            context.handleFilter(context.items, FilterType.Complete)
          }
        />
      </div>
      <button
        onClick={() => context.handleClearComplete()}
        className="todoButton"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
