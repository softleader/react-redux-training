import {TodoEvents} from "../constants/Events";

let id = 2;

const todos = [
  {id: 1, title: 'aaa'},
  {id: 2, title: 'bbb'}
];
export const getTodos = () => {
  return {
    type: TodoEvents.GET_TODOS,
    todos: JSON.parse(JSON.stringify(todos))
  }
};

export const addTodo = (title) => {
  const newTodo = {id: ++id, title};
  todos.push(newTodo);
  return {
    type: TodoEvents.ADD_TODOS,
    todo: JSON.parse(JSON.stringify(newTodo))
  }
};

export const delTodo = (id) => {
  let index = todos.map(todo => todo.id).indexOf(id);
  todos.splice(index, 1);
  return {
    type: TodoEvents.DEL_TODOS,
    message: '刪除成功'
  }
};