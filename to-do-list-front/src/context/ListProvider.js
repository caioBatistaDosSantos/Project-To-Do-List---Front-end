import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import ListContext from './ListContext';
import STUB_DB from '../stub-db';

function ListProvider({ children }) {
  const [data, setData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectStatus, setSelectStatus] = useState('pendente');

  useEffect(() => {
    setData(STUB_DB);
    axios.get(`${process.env.APP_TO_DO_BACK_URL}/list`).then((response) => {
      setAxiosData(response);
    });
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
    axiosData,
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
