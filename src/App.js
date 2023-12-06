import logo from './logo.svg';
import './App.css';
import BoxList from './colorboxes/BoxList';
import TodoList from './todos/TodoList';

// function App() {
//   return (
//     <div className="App">
//       <h1>Box Maker</h1>
//       <BoxList/>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList/>
    </div>
  );
}

export default App;
