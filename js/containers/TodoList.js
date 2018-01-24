import * as React from "react";
import {connect} from "react-redux";
import {addTodo, getTodos, deleteTodo} from "../actions/action.js";
import Todo from "../components/Todo.js";
import es6BindAll from "es6bindall";

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title : ""};
        es6BindAll(this, "handleChange", "handleDelete");
    }

    componentDidMount() {
        this.props.dispatch(getTodos());    
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleDelete(e) {
        this.props.dispatch(deleteTodo(e.target.id));    
    }

    render() {
        const todos = this.props.todos.map(todo => <Todo key={todo.id} id={todo.id} onClick={(e) => {
            this.handleDelete(e);
        }} title={todo.title}/>) 
       
        return (
            <div>
                <ul>
                {todos}
                </ul>
                <form onSubmit={e => {
                    e.preventDefault();
                    console.log(this.props);
                    this.props.dispatch(addTodo(this.state.title));
                }}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <input type="submit" defaultValue="送出" /> 
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos:state.todo.list
    }
}

export default connect(mapStateToProps)(TodoList)