import React from 'react';
import './App.css';
import ListTask from './components/ListTasks';
import NewAndUpdateTask from './components/NewAndUpdateTask';
import ListProvider from './context/ListProvider';

function App() {
  return (
    <ListProvider>
      <h1>LISTA DE TAREFAS</h1>
      <NewAndUpdateTask />
      <ListTask />
    </ListProvider>
  );
}

export default App;
