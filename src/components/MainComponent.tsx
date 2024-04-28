import { useContext } from "react";
import Footer from "./Footer/Footer";
import TodoForm from "./Form/TodoForm";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import "./main.css";
import { TodoContext } from "../contexts/Context";
const MainComponent = () => {
  const context = useContext(TodoContext);
  console.log("🚀 ~ MainComponent ~ context:", context);

  return (
    <div className="container">
      <div className="background"></div>
      <Header isSun={true} />

      {/* Form */}
      <TodoForm />
      {/* 
        Main container
            - List of item
            - Quantity of todo
            - Filter actions
            - Clear button
        */}
      <TodoList />
      <Footer />
    </div>
  );
};

export default MainComponent;
