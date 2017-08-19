import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App from './components/App';

//create the redux store(reducer, store)
const store = createStore(()=> {}, {}, applyMiddleware(logger))
store.subscribe(() => store.getState())
store.dispatch({ type: 'INIT'})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'));