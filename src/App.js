import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import PushTodo from './components/PushTodo';

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <PushTodo />
      <Todos />
    </>
  );
}

export default App;
