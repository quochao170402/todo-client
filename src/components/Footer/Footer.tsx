import { useContext, useState } from "react";
import { FilterType, TodoContext } from "../../contexts/TodoContext";
import "./style.css";
import TodoButton from "../TodoButton/TodoButton";
const Footer = () => {
  const context = useContext(TodoContext);
  const [active, setActive] = useState(0);
  const quantity = context.filter.length;

  const handleClearComplete = () => {
    context.items = context.items.filter((x) => !x.state);
  };

  const handleClick = (index: number, type: FilterType) => {
    setActive(index);
    context.handleFilter(type);
  };

  return (
    <div className="footer">
      <div className="quantity">{quantity} items left</div>
      <div className="filterContainer">
        <TodoButton
          name={FilterType.All}
          isChecked={context.currentFilterType === FilterType.All}
          handleClick={() => context.handleFilter(FilterType.All)}
        />
        <TodoButton
          name={FilterType.Active}
          isChecked={context.currentFilterType === FilterType.Active}
          handleClick={() => context.handleFilter(FilterType.Active)}
        />
        <TodoButton
          name={FilterType.Complete}
          isChecked={context.currentFilterType === FilterType.Complete}
          handleClick={() => context.handleFilter(FilterType.Complete)}
        />

        {/* <button
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
          className="todoButton checked"
        >
          Completed
        </button> */}
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
