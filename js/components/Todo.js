import * as React from "react";
import * as PropTypes from "prop-types";

export default class Todo extends React.Component {
    // props 用來與其他component之間傳遞資料
    constructor(props) {
        super(props);
        this.state = {title: ""};
    }

    render() {
        return (<span>{this.props.title}</span>);
    }
}


Todo.proptypes = {
    title: PropTypes.string.isRequired
};