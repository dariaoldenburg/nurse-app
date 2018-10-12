import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { todosAddItem } from '../../store/todos';


const required = (value) => (value ? undefined : 'Required');

const _TodoForm = ({ addTodo }) => {
  const onSubmit = (values) => {
    addTodo(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Field name="patientName" validate={required}>
            {({ input, meta }) => (
              <div>
                <input type="text" {...input} placeholder="Name" className="input" />
                {meta.touched && meta.error && <div>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="task" validate={required}>
            {({ input, meta }) => (
              <div>
                <input type="text" {...input} placeholder="Task" className="input"/>
                {meta.touched && meta.error && <div>{meta.error}</div>}
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting || pristine || invalid} className="submit">
            <i className="fas fa-plus" />
          </button>
        </form>
      )}
    />
  );
};

_TodoForm.propTypes = {
  addTodo: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(todosAddItem(todo)),
});

const TodoForm = connect(null, mapDispatchToProps)(_TodoForm);

export { TodoForm };
