import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createLogger from 'redux-logger';

import App from './App'
import gameReducer from './GameReducers';

const logger = createLogger();

const rootReducer = combineReducers(
    {gameReducer},
    applyMiddleware(logger)
);

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
