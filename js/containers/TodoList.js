import * as React from "react";
import Todo from "../components/Todo";
import {connect} from "react-redux";
import {addTodo, delTodo, getTodos} from "../actions/actions";
import es6BindAll from "es6bindall";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    es6BindAll(this, ["handleChange", "handleDeleteTodo"]);
    this.state = {
      title: ''
    }

  }

  getAll() {
    this.props.dispatch(getTodos())
  }

  componentDidMount() {
    this.getAll()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.message) {
      alert(nextProps.message);
      this.getAll()
    }
  }

  handleDeleteTodo(id) {
    this.props.dispatch(delTodo(id))
  }

  render() {
    const todos = this.props.todos.map(todo => {
      return <Todo {...todo}
                   key={todo.id}
                   handleDeleteTodo={this.handleDeleteTodo}/>
    });
    return <div>
      <ul>
        {todos}
      </ul>
      <form onSubmit={e => {
        e.preventDefault();
        this.props.dispatch(addTodo(this.state.title))
      }}>
        <input type="text" name="title" value={this.state.title}
               onChange={this.handleChange}/>
        <input type="submit" defaultValue="送出"/>
      </form>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.list,
    message: state.todo.message
  }
};

export default connect(mapStateToProps)(TodoList)