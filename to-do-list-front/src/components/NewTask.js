import React, { useContext } from 'react';
import ListContext from '../context/ListContext';

function NewTask() {
  const { STUB_DB } = useContext(ListContext);
  
  return (
    <section>
      <span>provavel que seja para escrever nova task</span>
    </section>
  );
}

export default NewTask;
