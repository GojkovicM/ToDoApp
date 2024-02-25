import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { ToDoListHandler } from "./store/todo";

function App() {
  return <div className="App">
    <ToDoListHandler>
      <HomePage></HomePage>
    </ToDoListHandler>
  </div>;
}

export default App;
