import React, {Component} from 'react';
import PropTypes from "prop-types";
import './index.css';

class Item extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodoById: PropTypes.func.isRequired
    }

    state = {
        mouseIn: false
    }

    // 鼠标移入、移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouseIn: flag
            });
        }
    }

    // 勾选或取消勾选一个todo
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    // 删除一个todo
    handleDelete = (id) => {
        return () => {
            if (window.confirm('确定删除吗？')) {
                this.props.deleteTodoById(id);
            }
        }
    }

    render() {
        const {id, name, done} = this.props;
        const {mouseIn} = this.state;
        return (
            <li style={{backgroundColor: mouseIn ? '#ddd' : 'white'}}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)}
                        className="btn btn-danger"
                        style={{display: mouseIn ? 'block' : 'none'}}>删除
                </button>
            </li>
        );
    }
}

export default Item;
