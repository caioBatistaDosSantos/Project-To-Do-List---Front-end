import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import './App.css';
import ListTask from './components/ListTasks';
import NewAndUpdateTask from './components/NewAndUpdateTask';
import ListProvider from './context/ListProvider';

function App() {
  return (
    <ListProvider>
      <Card
        color="dark"
        outline
      >
        <CardBody>
          <CardTitle tag="h1">
            LISTA DE TAREFAS
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            <NewAndUpdateTask />
            <ListTask />
          </CardSubtitle>
        </CardBody>
      </Card>
    </ListProvider>
  );
}

export default App;
