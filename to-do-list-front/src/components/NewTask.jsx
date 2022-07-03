import React, { useContext } from 'react';
import ListContext from '../context/ListContext';

function NewTask() {
  const {
    STATUS,
    hendleChange,
    btnAddTask,
  } = useContext(ListContext);
  
  return (
    <section>
      <label>
        <i>Insira uma nova tarefa: </i>
        <input
          type="text"
          id="new-task"
          name="new-task"
          onChange={ (e) => hendleChange(e)}
        />
      </label>
      <label>
        <i>Status: </i>
        <select
          id="column-status"
          name="column-status"
          onChange={ (e) => hendleChange(e)}
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
        onClick={ () => btnAddTask() }
      >
        Adicionar Tarefa
      </button>
    </section>
  );
}

export default NewTask;
