import uuid from 'uuid/v4';
import moment from 'moment';

import {
  TODOS_ADD_ITEM,
  TODOS_SET_CHECKED,
} from './todos.contants';

const initalState = [];


const todosReducer = (state = initalState, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case TODOS_ADD_ITEM: {
      const { todo } = action.payload;

      return [
        ...state,
        {
          ...todo,
          id: uuid(),
          date: moment().format('YYYY-MM-DD'),
          time: moment().format('HH:mm:ss'),
          isChecked: false,
        },
      ];
    }

    case TODOS_SET_CHECKED: {
      const { id } = action.payload;
      const { todos } = state;

      return todos.map((todo) => todo.id !== id ? todo : { ...todo, isChecked: true });
    }

    default: {
      return state;
    }
  }
};

export { todosReducer };
