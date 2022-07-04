/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ListContext from './ListContext';

const DEV_TEST = true;
const APP_TO_DO_BACK_URL = DEV_TEST ? 'http://localhost:3000' : 'https://to-do-list-back-dev-caio.herokuapp.com';

function ListProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectStatus, setSelectStatus] = useState('pendente');
  const [searchSelectStatus, setSearchSelectStatus] = useState('Todas as Tarefas');
  const [updateId, setUpdateId] = useState(false);
  const [order, setOrder] = useState(true);
  const [statusSearch, setStatusSearch] = useState('Todas as Tarefas');

  const getAllList = () => {
    axios.get(`${APP_TO_DO_BACK_URL}/list`)
      .then((response) => {
        setData(response.data);
        setDataSearch(response.data);
        setOrder(true);
        setStatusSearch('Todas as Tarefas');
      })
      .catch(() => {
        alert(`Sorry! The Database service is temporarily offline, but you can use the temporary version of the App!
        Thanks!`);
      });
  };

  const updateTask = async () => {
    await axios
      .put(`${APP_TO_DO_BACK_URL}/list/${updateId}`, {
        task: newTask,
        status: selectStatus,
      })
      .then((response) => {
        setUpdateId(false);
        setNewTask('');
        setSelectStatus('pendente');
        alert(response.data.message);
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
    getAllList();
  };

  useEffect(() => {
    getAllList();
  }, []);

  const hendleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'new-task') {
      setNewTask(value);
    } else if (name === 'column-status') {
      setSelectStatus(value);
    } else {
      setSearchSelectStatus(value);
    }
  };

  const createTask = () => {
    axios
      .post(`${APP_TO_DO_BACK_URL}/list`, {
        task: newTask,
        status: selectStatus,
      })
      .then((response) => {
        setData((prevState) => [
          ...prevState,
          response.data,
        ]);
        setNewTask('');
        setSelectStatus('pendente');
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const btnUpdateTask = (id, task, status) => {
    setUpdateId(id);
    setNewTask(task);
    setSelectStatus(status);
  };

  const btnDeleteTask = (id) => {
    axios
      .delete(`${APP_TO_DO_BACK_URL}/list/${id}`)
      .then((response) => {
        setData((prevState) => prevState.filter((ele) => ele.id !== id));
        alert(response.data.message);
      });
  };

  const sortByDate = () => {
    setData((prevState) => prevState.sort((a, b) => a.date.localeCompare(b.date)));

    setOrder(true);
  };

  const sortAlphabetically = () => {
    setData((prevState) => prevState.sort((a, b) => a.task_list.localeCompare(b.task_list)));

    setOrder(false);
  };

  const STATUS = ['pendente', 'em andamento', 'pronto'];

  const SEARCH_STATUS = ['Todas as Tarefas', 'Tarefas Pendentes', 'Tarefas em Andamento', 'Tarefas Prontas'];

  const VALUE_PROVIDER = {
    data,
    STATUS,
    newTask,
    selectStatus,
    updateId,
    hendleChange,
    updateTask,
    createTask,
    btnDeleteTask,
    btnUpdateTask,
    sortByDate,
    sortAlphabetically,
    order,
    SEARCH_STATUS,
    searchSelectStatus,
    statusSearch,
  };

  return (
    <ListContext.Provider value={VALUE_PROVIDER}>
      {children}
    </ListContext.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ListProvider;
