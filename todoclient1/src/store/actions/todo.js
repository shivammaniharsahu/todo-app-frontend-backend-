import * as actTypes from './actionTypes'
import axios from '../../axios'

export const fetchTodos = (search, status) => {
    return (dispatch) => {
        dispatch(todosStart());
        if(!status){
            status = 'new';
        }
        let url = `todos/?status=${status}`;
        if(search){
            url += `&search=${search}`;
        }
        console.log(url);
        axios.get(url)
        .then(resp => {
            let mytodos = resp.data
            // Object.keys(resp.data).forEach(e => {
            //     if(resp.data[e].status!="complete"){
            //         mytodos.push({
            //             id: e,
            //             ...resp.data[e]
            //         })    
            //     }
            // })
            dispatch(fetchTodosSuccess(mytodos));
        })
        .catch(err => {
            dispatch(todosFail(err.message));
        })
        
    }
}

export const todosStart = () => {
    return {
        type: actTypes.TODOS_START,
    }
}

export const fetchTodosSuccess = (todos) => {
    return {
        type: actTypes.FETCH_TODOS_SUCCESS,
        todos: todos
    }
}

export const todosFail = (error) => {
    return {
        type: actTypes.TODOS_FAIL,
        error: error
    }
}

export const addTodo = (title, description) => {
    return (dispatch) => {
        dispatch(todosStart());
        let url = `todos/`;
        let t1 = {
            title,
            description,
            status: "new",
        }
        axios.post(url, t1)
        .then(resp => {
            console.log(resp);
            console.log(t1);
            t1._id = resp.data._id;
            dispatch(addTodosSuccess(t1));
        })
        .catch(err => {
            dispatch(todosFail(err.message));
        })
        
    }
}

export const addTodosSuccess = (t1) => {
    return {
        type: actTypes.ADD_TODOS_SUCCESS,
        t1: t1
    }
}


export const completeTodo = (t1) => {
    return (dispatch) => {
        dispatch(todosStart());
        let url = `todos/${t1._id}`;
        t1.status="complete";
        axios.put(url, t1)
        .then(resp => {
            console.log(resp);
            dispatch(completeTodosSuccess(t1));
        })
        .catch(err => {
            dispatch(todosFail(err.message));
        })
        
    }
}

export const completeTodosSuccess = (t1) => {
    return {
        type: actTypes.COMPLETE_TODOS_SUCCESS,
        t1: t1
    }
}

export const deleteTodo = (t1) => {
    return (dispatch) => {
        dispatch(todosStart());
        let url = `todos/${t1._id}`;
        axios.delete(url)
        .then(resp => {
            console.log(resp);
            dispatch(deleteTodosSuccess(t1));
        })
        .catch(err => {
            dispatch(todosFail(err.message));
        })
        
    }
}

export const deleteTodosSuccess = (t1) => {
    return {
        type: actTypes.DELETE_TODOS_SUCCESS,
        t1: t1
    }
}

export const updateTodo = (t1) => {
    return (dispatch) => {
        dispatch(todosStart());
        let url = `todos/${t1.id}`;
        axios.put(url, t1)
        .then(resp => {
            console.log(resp);
            dispatch(updateTodosSuccess(t1));
        })
        .catch(err => {
            dispatch(todosFail(err.message));
        })
        
    }
}

export const updateTodosSuccess = (t1) => {
    return {
        type: actTypes.UPDATE_TODOS_SUCCESS,
        t1: t1
    }
}