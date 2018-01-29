import { TodoEvents } from "../constants/Events";

const todo = (state = {
  list: []//初始狀態
}, action) => {
  switch (action.type){
    case TodoEvents.GET_TODOS:
      return {list: action.todos};//next state
    case TodoEvents.ADD_TODO:
      return {list:[...state.list, action.todo]};//***** 
    case TodoEvents.DELETE_TODO:
      return {list: action.todo};
    default://一定要有
      return state;
  }
}

export default todo;