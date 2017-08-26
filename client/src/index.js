import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers/index';

//create the redux store(reducers, store)
const store = createStore(reducers, {}, applyMiddleware(logger, reduxThunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'));

