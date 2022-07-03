import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ListContext from './ListContext';

const APP_TO_DO_BACK_URL = 'https://to-do-list-back-dev-caio.herokuapp.com';

function ListProvider({ children }) {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectStatus, setSelectStatus] = useState('pendente');

  useEffect(() => {
    axios.get(`${APP_TO_DO_BACK_URL}/list`).then((response) => {
      setData(response.data);
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
    axios
      .post(`${APP_TO_DO_BACK_URL}/list`, {
        task: newTask,
        status: selectStatus,
      })
      .then((response) => {
        setData((prevState) => [
          ...prevState,
          response.data
        ]);
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
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
