import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from "../Item";
import './index.css';

class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodoById: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo, deleteTodoById} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id}
                                     {...todo}
                                     updateTodo={updateTodo}
                                     deleteTodoById={deleteTodoById}/>
                    })
                }
            </ul>
        );
    }
}

export default List;
