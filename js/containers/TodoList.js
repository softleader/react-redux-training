import * as React from "react";
import es6BindAll from "es6bindall";
import { connect } from "react-redux";
import { getTodos, addTodo, deleteTodo } from "../actions/action";
import Todo from "../components/Todo"

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: ""};
        
        es6BindAll(this, ["handleChange", "handleDelete"]);
    }

    componentDidMount() {
        this.props.dispatch(getTodos());
    }

    handleDelete(id) {
        return () => {
            this.props.dispatch(deleteTodo(id));
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const todos = this.props.todos.map(todo =>
            <Todo key={todo.id} title={todo.title}
                onClick={this.handleDelete(todo.id)}/>
        );

        return (
            <div>
                <ul>
                    {todos}
                </ul>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.dispatch(addTodo(this.state.title));
                }}>
                    <input type="text" name="title" value={this.state.title} 
                      onChange={this.handleChange} />
                    <input type="submit" defaultValue="送出" />
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.list
    }
};

export default connect(mapStateToProps)(TodoList);