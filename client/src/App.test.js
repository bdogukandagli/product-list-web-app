import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from './storage/store';

import App from './App';

test('render component without crash', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
