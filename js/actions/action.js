import {TodoEvents} from "../constants/Events.js";
var todos = [
    {id:1,title:"todo1"},
    {id:2,title:"todo2"}
]

export const getTodos = () => {
    return {
        type: TodoEvents.GET_TODOS,
        todos : JSON.parse(JSON.stringify(todos))
    };
}
let id = 2

export const addTodo = (title) => {
const newTodo = {id:++id, title:title}
todos.push(newTodo);
    return {
        type: TodoEvents.ADD_TODO,
        todo : JSON.parse(JSON.stringify(newTodo))
    };
}

export const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id != id);
    return {
        type: TodoEvents.DELETE_TODO,
        id : id
    };
}