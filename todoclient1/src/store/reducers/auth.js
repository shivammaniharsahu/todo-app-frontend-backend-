import * as actTypes from '../actions/actionTypes'
const initValues = {
    token: null,
    userid: null    
}

const signupSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        userid: action.userid
    }
}
const loginSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        userid: action.userid
    }
}
const logout = (state, action) => {
    return {
        ...state,
        token: null,
        userid: null
    }
}

export const authReducers = (state = initValues, action) => {
    switch (action.type) {
        case actTypes.AUTH_SIGNUP_SUCCESS:
            return signupSuccess(state, action);
        case actTypes.AUTH_LOGIN_SUCCESS:
            return loginSuccess(state, action);
        case actTypes.AUTH_LOGOUT:
            return logout(state, action);
        default:
            return state
    }
}

export default authReducers