import React from 'react';
import { object } from 'prop-types';


const TodoElement = ({ todo }) => {
  const { id, patientName, task, isChecked, date, time } = todo;

  return (
    <div id={id}>
      <div>{date}{time}</div>
      <div>
        <div>
          <div>{patientName}</div>
          <div>{task}</div>
        </div>
        <div>{isChecked}</div>
      </div>
    </div>
  );
};

TodoElement.propTypes = {
  todo: object.isRequired,
};

export { TodoElement };
