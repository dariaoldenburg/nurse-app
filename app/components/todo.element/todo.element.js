import React from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';

import { todosSetChecked } from '../../store/todos';


const _TodoElement = ({ todo, setChecked }) => {
  const { id, patientName, task, isChecked, date, time } = todo;

  return (
    <div className="todo">
      <div className="todo__timestamp"><span>{date}</span><span>{time}</span></div>
      <div className="todo__content">
        <div className="todo-description">
          <div className="todo-description__name">{patientName}</div>
          <div className="todo-description__task">{task}</div>
        </div>
        {
          !isChecked ? (
            <button className="todo__button" onClick={ () => setChecked(id) }>Done!</button>
          ) : (
            <i className="fas fa-check" />
          )
        }
      </div>
    </div>
  );
};

_TodoElement.propTypes = {
  todo: object.isRequired,
  setChecked: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setChecked: (id) => dispatch(todosSetChecked(id)),
});

const TodoElement = connect(null, mapDispatchToProps)(_TodoElement);

export { TodoElement };
