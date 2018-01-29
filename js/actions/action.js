import { TodoEvents } from "../constants/Events";


let id = 2;

const todos = [
  { id: 1, title: "todo1" },
  { id: 2, title: "todo2" },
];


export const getTodos = () => {
  return {
    type: TodoEvents.GET_TODOS,//指向事件名稱 必要
    todos: JSON.parse(JSON.stringify(todos)),//server吐回來已經是JSON string了
  };
};

export const addTodo = (title) => {
  const newTodo = { id: ++id, title };
  todos.push(newTodo);

  return {
    type: TodoEvents.ADD_TODO,
    todo: JSON.parse(JSON.stringify(newTodo)),
  }
};

export const deleteTodo = (e) => {
  todos.splice(e,1);
  return {
    type: TodoEvents.DELETE_TODO,
    todo: JSON.parse(JSON.stringify(todos)),
  }
};