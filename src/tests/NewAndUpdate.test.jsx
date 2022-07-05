/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {
  RADOM_TASK, PENDING, IN_PROGRESS, READY,
} from '../services/consts';

describe('Testa o component NewANdUpdate', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Testa se contém um h1, com o texto "LISTA DE TAREFAS"', () => {
    const title = screen.getByRole('heading', {
      level: 1,
      name: /LISTA DE TAREFAS/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('Testa se a página contém um campo de "nova tarefa" e se é possivel ecrever uma tarefa', () => {
    const labelEmail = screen.getByLabelText(/Insira uma nova tarefa:/i);
    expect(labelEmail).toBeInTheDocument();

    userEvent.type(labelEmail, RADOM_TASK);
    expect(labelEmail).toHaveValue(RADOM_TASK);
  });

  it('Testa a página contém um campo de "Status" e se é possivel selecionar um status', () => {
    const labelSelectStatus = screen.getByLabelText(/Status:/i);
    expect(labelSelectStatus).toBeInTheDocument();

    userEvent.selectOptions(labelSelectStatus, PENDING);
    expect(labelSelectStatus).toHaveValue(PENDING);

    userEvent.selectOptions(labelSelectStatus, IN_PROGRESS);
    expect(labelSelectStatus).toHaveValue(IN_PROGRESS);

    userEvent.selectOptions(labelSelectStatus, READY);
    expect(labelSelectStatus).toHaveValue(READY);
  });

  it('a página contém um botao "Adicionar Tarefa"', () => {
    const btnAddTask = screen.getByRole('button', { name: /Adicionar Tarefa/i });
    expect(btnAddTask).toBeInTheDocument();
  });
});
