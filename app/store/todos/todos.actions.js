import {
  TODOS_ADD_ITEM,
  TODOS_SET_CHECKED,
} from './todos.contants';

const todosAddItem = (todo) => ({
  type: TODOS_ADD_ITEM,
  payload: {
    todo,
  },
});

const todosSetChecked = (id) => ({
  type: TODOS_SET_CHECKED,
  payload: {
    id,
  },
});

export {
  todosAddItem,
  todosSetChecked,
};
