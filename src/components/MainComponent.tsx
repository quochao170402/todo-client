import { useContext, useState } from "react";
import Footer from "./Footer/Footer";
import TodoForm from "./Form/TodoForm";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import "./main.css";
import { ThemeContext } from "../contexts/ThemeContext";
interface MainProps {
  classNames: string[];
}
const MainComponent = () => {
  const context = useContext(ThemeContext);
  const containerClassNames =
    context?.theme === "light" ? "container" : "container dark";

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
