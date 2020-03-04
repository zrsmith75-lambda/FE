import {POSTING, SUCCESS_POSTING_LOGIN,SUCCESS_POSTING_SIGNUP, FAILURE_POSTING} from '../actions'

const initialState= {
    user: {
        user_id: '',
        user_type: ''
    },
    auctions: [],
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false
    

}

export const crudReducer = (state = initialState, action) => {
    console.log(`inside crud reducer`,state, action)
    switch(action.type){
    case POSTING:
        return {...state, isPosting: true}
    case SUCCESS_POSTING_LOGIN:
        console.log(action)
    return {...state, user_id: action.payload.user_id, user_type: action.payload.user_type, isPosting: false}
    case SUCCESS_POSTING_SIGNUP:
        return {...state, isPosting: false}
    case FAILURE_POSTING:
        return {...state, isPosting: false}
        default: 
        return state
    }
}