import { TodoEvents } from "../constants/Events";

const todo = (state = {
	list: []
}, action) => {
	switch(action.type) {
		case TodoEvents.GET_TODOS:
			return {list: action.todos};
		case TodoEvents.ADD_TODOS:
			return {list: [...state.list, action.todo]}
		case TodoEvents.DELETE_TODO:
			return {list: state.list.filter(todo => todo.id != action.todo[0].id)}
		default:
			return state;
	}
}

export default todo;