import React from 'react';
import { Form, Field } from 'react-final-form';


const onSubmit = () => {
  // TODO
};

const required = (value) => (value ? undefined : 'Required');

const TodoForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <Field name="patientName" validate={required}>
          {({ input, meta }) => (
            <div>
              <input type="text" {...input} placeholder="Name" />
              {meta.touched && meta.error && <div>{meta.error}</div>}
            </div>
          )}
        </Field>
        <Field name="task" validate={required}>
          {({ input, meta }) => (
            <div>
              <input type="text" {...input} placeholder="Task" />
              {meta.touched && meta.error && <div>{meta.error}</div>}
            </div>
          )}
        </Field>
        <button type="submit" disabled={submitting || pristine || invalid}>
          +
        </button>
      </form>
    )}
  />
);

export { TodoForm };
