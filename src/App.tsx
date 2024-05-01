import "./App.css";
import MainComponent from "./components/MainComponent";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
      <TodoProvider>
        <MainComponent />
      </TodoProvider>
  );
}

export default App;
