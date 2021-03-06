import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Header } from './components/header';
import { TodoForm } from './components/todo.form';
import { TodoList } from './components/todo.list';

import './styles/styles.scss';
import { store } from './store';


ReactDOM.render(
  <div className="app">
    <Provider store={ store }>
      <Fragment>
        <Header />
        <div className="app__container">
          <TodoForm />
          <TodoList />
        </div>
      </Fragment>
    </Provider>
  </div>,
  document.getElementById('react-app')
);
