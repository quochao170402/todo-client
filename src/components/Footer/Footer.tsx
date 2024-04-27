import TodoButton from "../Button/TodoButton";
import Filter from "../Filter/Filter";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="quantity">5 Item</div>
      <Filter />
      <TodoButton name="Clear Complete" />
    </div>
  );
};

export default Footer;
