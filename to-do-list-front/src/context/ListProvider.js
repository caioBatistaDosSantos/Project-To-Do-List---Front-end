import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListContext from './ListContext';
import STUB_DB from '../stub-db';

function ListProvider({ children }) {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectStatus, setSelectStatus] = useState('pendente');

  useEffect(() => {
    setData(STUB_DB)
  }, []);

  const hendleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'new-task') {
      setNewTask(value);
    } else {
      setSelectStatus(value)
    }
  };

  const btnAddTask = () => {
    const date = Date.now();

    setData((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        taskList: newTask,
        status: selectStatus,
        date,
      }
    ])
  }

  const STATUS = ['pendente', 'em andamento', 'pronto'];

  const valueProvider = {
    data,
    STATUS,
    hendleChange,
    btnAddTask,
  };

  return (
    <ListContext.Provider value={ valueProvider }>
      {children}
    </ListContext.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ListProvider;
