import React, { useContext } from 'react';
import ListContext from '../context/ListContext';

function ListTask() {
  const { STUB_DB } = useContext(ListContext);
  console.log(STUB_DB)
  
  return (
    <section>
      <span>Todas as Tarefas</span>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Data</th>
            <th>Atualizar Tarefa</th>
            <th>Remover Tarefa</th>
          </tr>
        </thead>
        <tbody>
          {STUB_DB.map((e) => (
            <tr key={e.id}>
              <td>{e.taskList}</td>
              <td>{e.status}</td>
              <td>{e.date}</td>
              <td>
                <button
                  type="button"
                  id="btn-update"
                  onClick={ () => console.log('click btn-update') }
                >
                  O
                </button>
              </td>
              <td>
                <button
                  type="button"
                  id="btn-delete"
                  onClick={ () => console.log('click btn-delete') }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ListTask;