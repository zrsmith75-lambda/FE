import {axiosWithAuth} from '../utils/axiosWithAuth'

// Posting action for login and signup form

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
            window.localStorage.setItem('token', res.data.token)
            alert(`${res.data.message}, you are now being redirected to Auction Page.`)
            dispatch({type: SUCCESS_POSTING_LOGIN, payload: {user_id: res.data.id, user_type: res.data.type}})

        })
        .catch(err => {
            dispatch({type: FAILURE_POSTING})
        })
    }
}

// Fetching auction for main menu

export const FETCHING = 'FETCHING'
export const SUCCESS_FETCHING = 'SUCCESS_FETCHING'
export const FAILURE_FETCHING = 'FAILURE_FETCHING'


export const fetchingAuction = () => {
    return(dispatch) => {
        dispatch({type: FETCHING})
        axiosWithAuth().get('/api/auctions')
        .then(res => {
            console.log(res)
            dispatch({type: SUCCESS_FETCHING})

        })
        .catch(err => {
            console.log(err)
            dispatch({type: FAILURE_FETCHING})
        })
    }
}