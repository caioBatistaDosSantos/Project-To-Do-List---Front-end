import React, { useContext } from 'react';
import {
  Table,
  Button,
} from 'reactstrap';
import ListContext from '../context/ListContext';

function ListTask() {
  const { data, btnDeleteTask, btnUpdateTask } = useContext(ListContext);

  return (
    <section>
      <span>Todas as Tarefas</span>
      <Table
        hover
        responsive
        size="sm"
        striped
      >
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
              <td>{e.task_list}</td>
              <td>{e.status}</td>
              <td>{e.date}</td>
              <td>
                <Button
                  type="button"
                  id="btn-update"
                  color="warning"
                  outline
                  onClick={() => btnUpdateTask(e.id, e.task_list, e.status)}
                >
                  O - Atualizar
                </Button>
              </td>
              <td>
                <Button
                  type="button"
                  id="btn-delete"
                  color="danger"
                  outline
                  onClick={() => btnDeleteTask(e.id)}
                >
                  X - Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default ListTask;
