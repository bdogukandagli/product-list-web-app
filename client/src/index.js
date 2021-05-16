import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './utils';
import { Provider } from 'react-redux';
import store from './storage/store';

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

  .pagination > li {
    display: inline-block;
    cursor: pointer;
  }
  .pagination > li {
    list-style: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    text-decoration: none;
    color: #697488;
    margin-left: -1px;
    border-radius: 2px;
  }
  
  .pagination>li.active>a {
    color: #fff;
    background-color: #1EA4CE;
  }
  
  .pagination>li.active>a:hover {
    color: #fff;
  }
  
  .pagination > li > a:hover {
    color: #1EA4CE;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
