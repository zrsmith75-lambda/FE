import {axiosWithAuth} from '../utils/axiosWithAuth'

export const POSTING = 'POSTING'
export const SUCCESS_POSTING = 'SUCCESS_POSTING'
export const FAILURE_POSTING = 'FAILURE_POSTING'

export const signupSave = (userInput) => {
    return(dispatch) => {
        dispatch({type: POSTING})
        axiosWithAuth().post('/api/auth/register', userInput)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.token)
            dispatch({type: SUCCESS_POSTING})
        })
        .catch(err => {
            console.log(err)
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
            dispatch({type: SUCCESS_POSTING, payload: res.data.id})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FAILURE_POSTING})
        })
    }
}
