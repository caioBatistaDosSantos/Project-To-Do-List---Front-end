import React from 'react';
import PropTypes from 'prop-types';
import ListContext from './ListContext';
import STUB_DB from '../stub-db';

function ListProvider({ children }) {
  const valueProvider = { STUB_DB };

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
