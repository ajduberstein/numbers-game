import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux';

import App from './App'
import gameReducer from './GameReducers';

const rootReducer = combineReducers({
     gameReducer
});

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
