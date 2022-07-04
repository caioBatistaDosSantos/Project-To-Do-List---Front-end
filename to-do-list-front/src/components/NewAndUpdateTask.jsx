import React, { useContext } from 'react';
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
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

  const noRefCheck = () => {};

  return (
    <section>
      <label htmlFor="new-task">
        {updateId ? <i>Atualize a tarefa: </i> : <i>Insira uma nova tarefa: </i>}
        <input
          type="text"
          id="new-task"
          name="new-task"
          value={newTask}
          onChange={(e) => hendleChange(e)}
        />
      </label>
      <ButtonDropdown
        toggle={noRefCheck}
      >
        {updateId ? <i>Novo status: </i> : <i>Status: </i>}
        <DropdownToggle caret>
          {selectStatus}
        </DropdownToggle>
        <DropdownMenu
          id="column-status"
          name="column-status"
          value={selectStatus}
          // onChange={(e) => hendleChange(e)}
        >
          {STATUS.map((e) => (
            <DropdownItem
              key={e}
              id={e}
            >
              {e}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
      <Button
        color={updateId ? 'warning' : 'success'}
        outline
        size="lg"
        type="button"
        id="btn-add-task"
        name="btn-add-task"
        onClick={() => (updateId ? updateTask() : createTask())}
      >
        {updateId ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
      </Button>
    </section>
  );
}

export default NewTask;
