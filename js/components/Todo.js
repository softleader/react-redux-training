import * as React from "react";
import PropTypes from "prop-types";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let todo = this.props;
    return <li>{todo.title}
      <button onClick={() => this.props.handleDeleteTodo(todo.id)}>刪除</button>
    </li>

  }
}

Todo.proptypes = {
  title: PropTypes.string.isRequired
  id: PropTypes.string.isRequired
};
