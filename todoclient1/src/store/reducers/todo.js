import * as actTypes from '../actions/actionTypes'


const initValues = {
    todos: null,
    loading: false,
    error: null,
    selectedTodo: null
}

const todosStart = (state  , action) => {
    return {
        ...state,
        loading: true,
        error: null,
    }
}

const fetchTodosSuccess = (state  , action) => {
    return {
        ...state,
        loading: false,
        todos: action.todos   
    }
}

const todosFail = (state  , action) => {
    return {
        ...state,
        loading: false,
        error: action.error   
    }
}

const addTodosSuccess = (state , action) => {
    return {
        ...state,
        loading: false,
        todos: [...state.todos, action.t1]
    }
}

const completeTodosSuccess = (state , action) => {
    let uptodos = state.todos.filter(t1 => t1._id !=action.t1._id)
    return {
        ...state,
        loading: false,
        todos: uptodos
    }
}

const deleteTodosSuccess = (state , action) => {
    let uptodos = state.todos.filter(t1 => t1._id !=action.t1._id)
    return {
        ...state,
        loading: false,
        todos: uptodos
    }
}

const updateTodosSuccess = (state , action) => {
    let t1 = state.todos.find(t1 == t1._id !=action.t1._id)
    t1 = {...action.t1}
    return {
        ...state,
        loading: false,
        todos: {...state.todos}
    }
}


const todoReducers = (state = initValues , action) => {
    switch (action.type) {
        case actTypes.TODOS_START:
            return todosStart(state, action)
        case actTypes.FETCH_TODOS_SUCCESS:
            return fetchTodosSuccess(state, action)
        case actTypes.TODOS_FAIL:
            return todosFail(state, action)
        case actTypes.ADD_TODOS_SUCCESS:
            return addTodosSuccess(state, action)
        case actTypes.COMPLETE_TODOS_SUCCESS:
            return completeTodosSuccess(state, action)
        case actTypes.DELETE_TODOS_SUCCESS:
            return deleteTodosSuccess(state, action)
        case actTypes.UPDATE_TODOS_SUCCESS:
            return updateTodosSuccess(state, action)
        default:
            return state
    }
}

export default todoReducers;    