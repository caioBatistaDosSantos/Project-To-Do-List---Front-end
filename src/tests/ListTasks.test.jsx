/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {
  ALL_MESSAGES_FOR_DATE_SPAN,
  SEARCH_STATUS,
  ALL_MESSAGES_FOR_ALPHABETICS_SPAN,
  ALL_THEADS,
} from '../services/consts';

describe('Testa a mensagem "listando" do span', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Se inica com todas as tarefas por criação', () => {
    const message = screen.getByText(ALL_MESSAGES_FOR_DATE_SPAN[0]);
    expect(message).toBeInTheDocument();
  });

  it('Se altera apos clicado em "ordem Alfabética"', () => {
    const checkbox = screen.getByLabelText(/Ordem alfabética/i);

    userEvent.click(checkbox);

    const message = screen.getByText(ALL_MESSAGES_FOR_ALPHABETICS_SPAN[0]);
    expect(message).toBeInTheDocument();
  });

  it('Se altera apos selecionado nas opções do "select", por data', () => {
    const labelSelectStatus = screen.getByTestId(/column-status-search/i);
    const btnAddTask = screen.getByRole('button', { name: /Buscar/i });

    SEARCH_STATUS.forEach((e, index) => {
      userEvent.selectOptions(labelSelectStatus, e);
      userEvent.click(btnAddTask);

      const message = screen.getByText(ALL_MESSAGES_FOR_DATE_SPAN[index]);
      expect(message).toBeInTheDocument();
    });
  });

  it('Se altera apos selecionado nas opções do "select", em ordem alfabética', () => {
    const checkbox = screen.getByLabelText(/Ordem alfabética/i);
    userEvent.click(checkbox);

    const labelSelectStatus = screen.getByTestId(/column-status-search/i);
    const btnAddTask = screen.getByRole('button', { name: /Buscar/i });

    SEARCH_STATUS.forEach((e, index) => {
      userEvent.selectOptions(labelSelectStatus, e);
      userEvent.click(btnAddTask);

      const message = screen.getByText(ALL_MESSAGES_FOR_ALPHABETICS_SPAN[index]);
      expect(message).toBeInTheDocument();
    });
  });
});

describe('Testa a tabela do component LisTasks', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Se contem uma tabela', () => {
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('Se a tabela contem o theads "Tarefa", "Status", "Data", "Atualizar Tarefa" e "Remover Tarefa"', () => {
    ALL_THEADS.forEach((e) => {
      const theads = screen.getByRole('columnheader', {
        name: e,
      });
      expect(theads).toBeInTheDocument();
    });
  });
});
