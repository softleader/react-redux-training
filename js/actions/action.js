import {TodoEvents} from "../constants/Events";
let id = 2;
const todos = [
    {id:1, title: "todo1"},
    {id:2, title: "todo2"},
];

// supplier
export const getTodos = () => {
    return {
        type: TodoEvents.GET_TODOS,              // 事件名稱(required)
        todos: JSON.parse(JSON.stringify(todos)) // 為了是複製一份
    };
};

export const addTodo = (title) => {
    const newTodo = {id: ++id, title};
    todos.push(newTodo);
    return {
        type: TodoEvents.ADD_TODOS,              // 事件名稱(required)
        todo: {id: ++id, title: title}
    }
};
export const delTodo = (target) => {
    let delId = target;                          // 要被刪除的ID
    return {
        type: TodoEvents.DEL_TODOS,              // 事件名稱(required)
        delId: delId
    }
};