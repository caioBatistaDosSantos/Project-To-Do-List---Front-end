import React, { useContext } from 'react';
import ListContext from '../context/ListContext';

function ListTask() {
  const { data, axiosData } = useContext(ListContext);

  console.log(axiosData);
  
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
          {data.map((e) => (
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