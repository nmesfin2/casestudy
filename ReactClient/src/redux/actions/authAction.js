import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "./types"
import axios from 'axios'

export const registerUser = formData => async dispatch =>{
    try {
        const res = await axios.post('http://localhost:9005/api/auth/signup', formData)
        .then(response => localStorage.setItem("data", JSON.stringify(response.data)))
        // .then(res => console.log(JSON.stringify(res)))
        // .catch(err =>console.log(JSON.stringify(err)))
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data 
        })

    }catch(err){
        dispatch({
            type:REGISTER_FAIL
        })
    }
}

export const login =(username, password) => async dispatch =>{
    const body = {username, password}
    try{
        const res = await axios.post('http://localhost:9005/api/auth/signin', body)
       
        localStorage.setItem("data", JSON.stringify(res.data));
        dispatch({
            type:LOGIN_SUCCESS,
            payload :res.data
        })
        
    }catch(err){
        dispatch({
            type:LOGIN_FAIL
        })
    }
}

export const logout = () => async dispatch=> {
    localStorage.clear();
    dispatch(
        {type:LOGOUT}
    )
}