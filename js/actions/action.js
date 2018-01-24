import { TodoEvents } from "../constants/Events";

let id = 2;

const todos = [
	{id:1, title: "todo1"},
	{id:2, title: "todo2"}
]

export const getTodos = () => {
	return {
		type: TodoEvents.GET_TODOS,
		// copy datas
		todos: JSON.parse(JSON.stringify(todos)),
	};
};

export const addTodo = (title) => {
	const newTodo = {id: ++id, title};
	todos.push(newTodo); 

	return {
		type: TodoEvents.ADD_TODOS,
		todo: JSON.parse(JSON.stringify(newTodo))
	}
}

export const deleteTodo = (delId) => {
	console.log("action delId = " + delId)
	const delTodo = todos.filter(todo => todo.id == delId);
	delete todos[todos.indexOf(delTodo)];
	
	return {
		type: TodoEvents.DELETE_TODO,
		todo: JSON.parse(JSON.stringify(delTodo))
	}
}

