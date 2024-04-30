import "./style.css";

interface TodoButtonProps {
  name: string;
  isChecked: boolean;
  handleClick: () => void;
}

const TodoButton = (props: TodoButtonProps) => {
  const { name, isChecked, handleClick } = props;
  const classNames = isChecked ? "todoButton checked" : "todoButton";

  return (
    <button onClick={handleClick} className={classNames}>
      {name}
    </button>
  );
};

export default TodoButton;
