import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'whatwg-fetch';
import promise from 'redux-promise';
import App from 'Components/base_layout/app/App';

import reducers from './reducers';
import './style/main.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#main'),
);
