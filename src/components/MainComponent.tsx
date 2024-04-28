import Footer from "./Footer/Footer";
import TodoForm from "./Form/TodoForm";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import "./main.css";
const MainComponent = () => {
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
