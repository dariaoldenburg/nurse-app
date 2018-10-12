import uuid from 'uuid/v4';

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
        ...state.todos,
        {
          ...todo,
          id: uuid(),
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
