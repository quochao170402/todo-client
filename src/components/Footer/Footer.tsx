import { useContext } from "react";
import TodoButton from "../Button/TodoButton";
import Filter from "../Filter/Filter";
import "./style.css";
import { TodoContext } from "../../contexts/TodoContext";
const Footer = () => {
  const context = useContext(TodoContext);
  const quantity = context.items.length;
  return (
    <div className="footer">
      <div className="quantity">{quantity} todo</div>
      <Filter />
      <TodoButton name="Clear Complete" />
    </div>
  );
};

export default Footer;
