import React, {Component} from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import './App.css'

export default class App extends Component {

    /**
     * 状态在哪里，操作状态的方法就在哪里
     * @type {{todos: [{name: string, id: string, done: boolean},{name: string, id: string, done: boolean},{name: string, id: string, done: boolean},{name: string, id: string, done: boolean}]}}
     */
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
            {id: '004', name: '逛街', done: false},
        ]
    }

    /**
     * 添加一个todo
     * @param todoObj {id: '001', name: '吃饭', done: true}
     */
    addTodo = (todoObj) => {
        // 获取原todos
        const {todos} = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({todos: newTodos})
    }

    /**
     * 更新一个todo
     * @param id {string} todo的id
     * @param done {boolean} 是否完成
     */
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const {todos} = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done}
            else return todoObj
        })
        // 更新状态
        this.setState({todos: newTodos})
    }

    /**
     * 删除一个todo
     * @param id {string} todo的id
     */
    deleteTodoById = (id) => {
        // 获取原todos
        const {todos} = this.state
        // 过滤数据
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        // 更新状态
        this.setState({todos: newTodos})
    }

    /**
     * 全选或全不选
     * @param done {boolean} 是否完成
     */
    checkAllTodo = (done) => {
        // 获取原todos
        const {todos} = this.state
        // 加工数据
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done}
        })
        // 更新状态
        this.setState({todos: newTodos})
    }

    /**
     * 清除所有已完成的todo
     */
    clearAllDone = () => {
        // 获取原todos
        const {todos} = this.state
        // 过滤数据
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        // 更新状态
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos}
                              updateTodo={this.updateTodo}
                              deleteTodoById={this.deleteTodoById}/>
                        <Footer todos={todos}
                                checkAllTodo={this.checkAllTodo}
                                clearAllDone={this.clearAllDone}/>
                    </div>
                </div>
            </div>
        );
    }
}
