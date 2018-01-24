import * as React from "react";
import {connect} from "react-redux";
import Todo from "../components/Todo";
import {addTodo, delTodo, getTodos} from "../actions/action";
import es6bindall from "es6bindall";

// 因為最後不是export這個TodoList, 所以前面不加export default
class TodoList extends React.Component {

    // props 用來與其他component之間傳遞資料
    constructor(props) {
        super(props);
        this.state = {title: ""};
        es6bindall(this, ["handleChange", "handleClick"]); // 為了在container中自行定義method使用this

    }

    handleChange(e) {
        // react 給的(只要不是constructor,期他想要改變狀態者都要使用setState)
        // this.setState({title: e.target.value});
        // 該state是由事件自行決定(動態)
        this.setState({[e.target.name]: e.target.value});
    };


    handleClick(e) {
        // 用value做為刪除依據
        this.props.dispatch(delTodo(e.target.value));
    };



    render() {
        const todos = this.props.todos.map(todo=> {
            let temp = (
                <li key={todo.id+"div"} value={todo.id}>
                    <Todo key={todo.id+"todo"} title={todo.title} />
                    <button key={todo.id} value={todo.id} role="button" onClick={this.handleClick}>刪除</button>
                </li>)
            return temp;
        });

        return (
            <div>
                <ul>{todos}</ul>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.dispatch(addTodo(this.state.title));
                }}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <input type="submit" defaultValue="送出" />
                </form>
            </div>
        )
    }

    componentDidMount() {
        // Component render 完成後觸發，整個 Component 的生命週期中只會觸發一次
        this.props.dispatch(getTodos());// 參數為 委派action取回的資料
    }

}


// state 是整個應用程式的state
// 是好多個reducers 處理完的資料(結果), 結合在一起的
// 從server端拿回的資料最後是一包state, 裡面的格式是自己要決定的
const mapStateToProps = (state) => {
// 這邊拿到todolist但是不一定會update
    return {
        todos: state.todo.list // 這邊自定義的attrs是this.props
    }
};

// 從store拿資料到component(TodoList)
// dynamic method
// mapStateToProps這個method名稱是動態的, 後面TodoList是該method的參數
export default connect(mapStateToProps)(TodoList);