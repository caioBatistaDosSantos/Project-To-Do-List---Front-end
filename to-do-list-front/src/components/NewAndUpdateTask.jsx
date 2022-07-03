import React, { useContext } from 'react';
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
      <label htmlFor="column-status">
        {updateId ? <i>Novo status: </i> : <i>Status: </i>}
        <select
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
        </select>
      </label>
      <button
        type="button"
        id="btn-add-task"
        name="btn-add-task"
        onClick={() => (updateId ? updateTask() : createTask())}
      >
        {updateId ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
      </button>
    </section>
  );
}

export default NewTask;
