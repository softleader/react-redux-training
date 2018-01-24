import * as React from "react";
import PropTypes from "prop-types";
import { deleteTodo } from "../actions/action";
import { connect } from "react-redux";

class Todo extends React.Component {
    
    constructor(props) {
        super();
        // super(props);
    }

    // constructor(props) {
    //     super(props);
    //     this.props;
    // }

    render() {
        return (
            <li>{this.props.title}<input type="button" 
            defaultValue="刪除" onClick={this.props.onClick}/></li>
        );
    }

}

Todo.proptypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default connect()(Todo);
// Todo.defaultProps = {
//     title: "default"
// };