import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { getTodos, addTodo, deleteTodo} from '../actions/action'
import es6BindAll from 'es6bindall';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" }
    es6BindAll(this, ["handleChange","handleDelete"]);
  }

  componentDidMount() {
    // Component render 完成後觸發，整個 Component 的生命週期中只會觸發一次
    this.props.dispatch(getTodos());
  }

  handleChange(e) {//動態決定參數名稱
    this.setState({ [e.target.name]: e.target.value });
  }
  handleDelete(index){
    return () => {
      this.props.dispatch(deleteTodo(index));
    }
  }


  render() {
    const todos = this.props.todos.map(todo => {
    const index = this.props.todos.indexOf(todo);
      return <Todo handleDelete={this.handleDelete} value={index} key={todo.id} title={todo.title} />
    });

    return (
      <div>
        <ul>
          {todos}
        </ul>
        <form onSubmit={e => {
          e.preventDefault();
          // if(this.state.title===""){
          //   alert("please input something");
          // }else{
          this.props.dispatch(addTodo(this.state.title));
          // }
          // this.setState({title:""});
        }}>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
          <input type="submit" defaultValue="送出" />
        </form>
      </div>
    );
  }
}

//此Component需要的資料 在這裡撈過來
const mapStateToProps = (state) => {
  return {
    todos: state.todo.list,
  }
}

//動態methods
export default connect(mapStateToProps)(TodoList);