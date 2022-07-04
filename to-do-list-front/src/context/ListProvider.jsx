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
  const [newTask, setNewTask] = useState('');
  const [selectStatus, setSelectStatus] = useState('pendente');
  const [updateId, setUpdateId] = useState(false);

  const updateTask = () => {
    axios
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
  };

  useEffect(() => {
    axios.get(`${APP_TO_DO_BACK_URL}/list`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        alert(`Sorry! The Database service is temporarily offline, but you can use the temporary version of the App!
        Thanks!`);
      });
  }, []);

  const hendleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'new-task') {
      setNewTask(value);
    } else {
      setSelectStatus(value);
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

  const STATUS = ['pendente', 'em andamento', 'pronto'];

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
