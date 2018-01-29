import * as React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li>{this.props.title}<button onClick={this.props.handleDelete(this.props.value)}>刪除</button></li>
    );
  }
}

Todo.proptypes = {
  title: PropTypes.string.isRequired
};