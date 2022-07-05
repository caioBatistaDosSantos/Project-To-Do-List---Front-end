/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ListContext from './ListContext';
import {
  APP_TO_DO_BACK_URL,
  PENDING,
  STATUS,
  ALL_TASKS,
  SEARCH_STATUS,
} from '../services/consts';

function ListProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataForSearch, setDataForSearch] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectStatus, setSelectStatus] = useState(PENDING);
  const [searchSelectStatus, setSearchSelectStatus] = useState(ALL_TASKS);
  const [updateId, setUpdateId] = useState(false);
  const [order, setOrder] = useState(true);
  const [statusSearch, setStatusSearch] = useState(ALL_TASKS);

  const getAllList = () => {
    axios.get(`${APP_TO_DO_BACK_URL}/list`)
      .then((response) => {
        setData(response.data);
        setDataForSearch(response.data);
        setOrder(true);
        setStatusSearch(ALL_TASKS);
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
        setSelectStatus(PENDING);
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
        setSelectStatus(PENDING);
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

  const filterByStatus = (status) => {
    const newData = dataForSearch;
    const dataFilter = newData.filter((e) => e.status === status);

    setData(dataFilter);
    setStatusSearch(searchSelectStatus);
  };

  function btnSearch() {
    if (searchSelectStatus === SEARCH_STATUS[1]) {
      return filterByStatus(STATUS[0]);
    }

    if (searchSelectStatus === SEARCH_STATUS[2]) {
      return filterByStatus(STATUS[1]);
    }

    if (searchSelectStatus === SEARCH_STATUS[3]) {
      return filterByStatus(2);
    }

    setData(dataForSearch);
    return setStatusSearch(searchSelectStatus);
  }

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
    btnSearch,
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
