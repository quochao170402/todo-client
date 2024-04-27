import "./style.css";

interface TodoButtonProps {
  name: string;
}

const TodoButton = (props: TodoButtonProps) => {
  const { name } = props;
  return (
    <>
      <button className="todoButton">{name}</button>
    </>
  );
};

export default TodoButton;
