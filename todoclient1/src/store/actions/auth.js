import * as actTypes from './actionTypes'
import axios from '../../axios'

export const login = (email, password) => {
    return dispatch => {
        const url = "users/login";
        const data = {
            email: email,
            password: password
        }
        axios.post(url, data)  
        .then(resp => {
            console.log("ok", resp);            
            const token= resp.data.token;
            const userid = resp.data.user._id;
            dispatch(loginSuccess(token,userid))
        })   
        .catch( err => {console.log(err)})  
    }
}

export const autoLoginCheck = () => {
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userid")
    if(token && userId){
        return loginSuccess(token, userId);
    }
    return {
        type: actTypes.DO_NOTHING
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userid")
    return {
        type: actTypes.AUTH_LOGOUT,
    }
}


export const loginSuccess = (token,userid) => {
    localStorage.setItem("token", token)
    localStorage.setItem("userid", userid)
    return {
        type: actTypes.AUTH_LOGIN_SUCCESS,
        token,
        userid
    }
}

export const signup = (email, password, name) => {
    return dispatch => {
        const url = "users/" 
        const data = {
            email: email,
            password: password,
            name: name,
            role: 'user'
        }
        axios.post(url, data)  
        .then(resp => {
            const token= resp.data.token;
            const userid = resp.data.user._id;
            dispatch(signupSuccess(token,userid))
        })   
        .catch( err => {console.log(err)})  

    }
}
export const signupSuccess = (token,userid) => {
    localStorage.setItem("token", token)
    localStorage.setItem("userid", userid)
    return {
        type: actTypes.AUTH_SIGNUP_SUCCESS,
        token,
        userid
    }
}
