import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';
import { store } from './store';


ReactDOM.render(
  <div className="app">
    <Provider store={ store }>
      <div className="app__container">App</div>
    </Provider>
  </div>,
  document.getElementById('react-app')
);
