import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
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
  return <TodoList Items={todoList} />;
}

export default App;
