/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {
  SEARCH_STATUS,
} from '../services/consts';

describe('Testa o component SearchAndUpdate', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Testa se contém um h5, com o texto "Ordenar por:"', () => {
    const subtitle = screen.getByRole('heading', {
      level: 5,
      name: /Ordenar por:/i,
    });
    expect(subtitle).toBeInTheDocument();
  });

  it('Testa se contém um h5, com o texto "Buscar por:"', () => {
    const subtitle = screen.getByRole('heading', {
      level: 5,
      name: /Buscar por:/i,
    });
    expect(subtitle).toBeInTheDocument();
  });

  it('Testa se a página contém um checkbox de "Data de criação"', () => {
    const checkbox = screen.getByLabelText(/Data de criação/i);
    expect(checkbox).toBeInTheDocument();
  });

  it('Testa se a página contém um checkbox de "Ordem alfabética"', () => {
    const checkbox = screen.getByLabelText(/Ordem alfabética/i);
    expect(checkbox).toBeInTheDocument();
  });

  it('Testa se a página contém um select na secao "Buscar" e se é possivel selecionar um status', () => {
    const labelSelectStatus = screen.getByTestId(/column-status-search/i);
    expect(labelSelectStatus).toBeInTheDocument();

    SEARCH_STATUS.forEach((e) => {
      userEvent.selectOptions(labelSelectStatus, e);
      expect(labelSelectStatus).toHaveValue(e);
    });
  });

  it('Testa se a página contém um botao "Buscar"', () => {
    const btnAddTask = screen.getByRole('button', { name: /Buscar/i });
    expect(btnAddTask).toBeInTheDocument();
  });
});
