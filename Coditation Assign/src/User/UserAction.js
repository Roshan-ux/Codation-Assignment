import axios from 'axios'
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

export const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
export const fetchUserFailure=(err)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:err
    }
}
export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
axios.get('https://api.github.com/users').then(res=>{
dispatch(fetchUserSuccess(res.data))
}).catch(err=>{
dispatch(fetchUserFailure(err.message))
})
    }
}
