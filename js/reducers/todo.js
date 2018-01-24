import {TodoEvents} from "../constants/Events";

const todo = (state = {list: []}, action, message) => {
  switch (action.type) {
    case TodoEvents.GET_TODOS:
      return {list: action.todos};
    case TodoEvents.ADD_TODOS:
      return {list: [...state.list, action.todo]};
    case TodoEvents.DEL_TODOS:
      return Object.assign({}, state, {message: action.message});
    default :
      return state;
  }
};

export default todo;