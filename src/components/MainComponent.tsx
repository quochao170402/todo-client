import Footer from "./Footer/Footer";
import TodoForm from "./Form/TodoForm";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import "./main.css";
const MainComponent = () => {
  const todoList: Todo[] = [
    {
      id: "1",
      title: "Learn Typescript",
      state: false,
    },
    {
      id: "2",
      title: "Learn English",
      state: true,
    },
    {
      id: "3",
      title: "Learn React with Typescript",
      state: false,
    },
  ];

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
      <TodoList Items={todoList} />
      <Footer />
    </div>
  );
};

export default MainComponent;
