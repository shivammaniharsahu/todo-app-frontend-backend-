import React, { Component } from 'react'
import {fetchTodos, addTodo, completeTodo, updateTodo, deleteTodo} from '../../store/actions'
import TodoList from '../../components/todo/TodoList'
import axios from '../../axios'
import {connect} from 'react-redux'
import withErrorHand from '../../hoc/withErrorHand'


class Todo extends Component {    
    componentDidMount(){
        this.props.fetchTodos()
    }
    render() {
        return (
            <div>
                <TodoList  addTodo={this.props.addTodo} userid={this.props.userid} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo} todos={this.props.todos} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todos: state.todo.todos,
        loading: state.todo.loading,
        error: state.todo.error,
        userid: state.auth.userid,
        token: state.auth.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTodos()),
        addTodo: (title, description) => dispatch(addTodo(title, description)),
        completeTodo: (t1) => dispatch(completeTodo(t1)),
        deleteTodo: (t1) => dispatch(deleteTodo(t1)),
        updateTodo: (t1) => dispatch(updateTodo(t1)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHand(Todo, axios))