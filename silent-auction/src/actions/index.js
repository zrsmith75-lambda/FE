import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

export const POSTING = 'POSTING'
export const FAILURE_POSTING = 'FAILURE_POSTING'
export const SUCCESS_POSTING_SIGNUP = 'SUCCESS_POSTING_SIGNUP'
export const SUCCESS_POSTING_LOGIN = 'SUCCESS_POSTING_LOGIN'

export const signupSave = (userInput) => {
    return(dispatch) => {
        dispatch({type: POSTING})
        axiosWithAuth().post('/api/auth/register', userInput)
        .then(res => {
            window.localStorage.setItem('token', res.data.token)
            dispatch({type: SUCCESS_POSTING_SIGNUP})
        })
        .catch(err => {
            dispatch({type: FAILURE_POSTING})
        })
    }
}

export const loginSave = (userInput) => {
    return(dispatch) => {
        dispatch({type: POSTING, payload: true})
        axiosWithAuth().post('/api/auth/login', userInput)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.token)
            alert(`${res.data.message}, you are now being redirected to Auction Page.`)
            dispatch({type: SUCCESS_POSTING_LOGIN, payload: {user_id: res.data.id, user_type: res.data.type}})

        })
        .catch(err => {
            console.log(err)
            dispatch({type: FAILURE_POSTING})
        })
    }
}