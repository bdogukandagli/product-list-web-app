import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './storage/store';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './utils';
import { render } from '@testing-library/react';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  a{
    text-decoration:none;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
  }

  body{
    margin: 0px;
  }
`;

test('renders with root component', () => {
  render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
});
