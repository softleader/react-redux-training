import * as React from "react";
import PropTypes from "prop-types";
import {deleteTodo} from "../actions/action.js";

export default class Todo extends React.Component{
    constructor(props) {
        super(props);
    }

    deleteHandle(id) {
        this.props.dispatch(deleteTodo(id));
    }

    render() {
        return (
            <li>{this.props.title}<input key={this.props.id}  type="submit" onClick={this.props.onClick} id={this.props.id} defaultValue="刪除"/></li>
        );
    }
}

Todo.proptypes = {
    title: PropTypes.string.isRequired
}