import React, { useContext } from 'react';
import {
  Input,
  Button,
  Row,
} from 'reactstrap';
import '../App.css';
import ListContext from '../context/ListContext';

function NewTask() {
  const {
    STATUS,
    newTask,
    selectStatus,
    updateId,
    hendleChange,
    updateTask,
    createTask,
  } = useContext(ListContext);

  return (
    <Row>
      <label htmlFor="new-task">
        {updateId ? <i>Atualize a tarefa: </i> : <i>Insira uma nova tarefa: </i>}
        <Input
          bsSize="lg"
          type="text"
          id="new-task"
          name="new-task"
          value={newTask}
          onChange={(e) => hendleChange(e)}
        />
      </label>
      <label htmlFor="column-status">
        {updateId ? <i>Novo status: </i> : <i>Status: </i>}
        <Input
          type="select"
          id="column-status"
          name="column-status"
          value={selectStatus}
          onChange={(e) => hendleChange(e)}
        >
          {STATUS.map((e) => (
            <option
              key={e}
              id={e}
            >
              {e}
            </option>
          ))}
        </Input>
      </label>
      <Button
        color={updateId ? 'warning' : 'success'}
        outline
        size="lg"
        type="button"
        id="btn-add-task"
        name="btn-add-task"
        className="Card"
        onClick={() => (updateId ? updateTask() : createTask())}
      >
        {updateId ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
      </Button>
    </Row>
  );
}

export default NewTask;
