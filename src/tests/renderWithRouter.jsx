import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

const RenderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={ history }>
        {component}
      </Router>,
    ),
    history,
  };
};

export default RenderWithRouter;
