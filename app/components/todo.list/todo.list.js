import React from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import { TodoElement } from '../todo.element';


const _TodoList = ({ todos }) => (
  <div className="todo-list">
    {
      todos.map((todo) => (
        <TodoElement key={todo.id} todo={todo} />
      ))
    }
  </div>
);

_TodoList.propTypes = {
  todos: arrayOf(object).isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const TodoList = connect(mapStateToProps)(_TodoList);

export { TodoList };
