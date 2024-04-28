import "./App.css";
import MainComponent from "./components/MainComponent";
import { TodoContext } from "./contexts/Context";

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

function App() {
  return (
    <TodoContext.Provider value={todoList}>
      <MainComponent />;
    </TodoContext.Provider>
  );
}

export default App;
