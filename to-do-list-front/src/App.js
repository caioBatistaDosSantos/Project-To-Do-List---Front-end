import './App.css';
import ListTask from './components/ListTasks';
import NewTask from './components/NewTask';
import ListProvider from './context/ListProvider';

function App() {
  return (
    <ListProvider>
      <h1>texto qualquer</h1>
      <NewTask />
      <ListTask />
    </ListProvider>
  );
}

export default App;
