import todoRducers from './reducers/todo'
import authReducers from './reducers/auth'

import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todo: todoRducers,
    auth: authReducers
})

const enhanceComp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, enhanceComp(applyMiddleware(thunk)));

export default store