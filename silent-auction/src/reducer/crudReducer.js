import {POSTING, SUCCESS_POSTING, FAILURE_POSTING} from '../actions'

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
    switch(action.type){
    case POSTING:
        return {...state, isPosting: action.payload}
    case SUCCESS_POSTING:
        return {...state, isPosting: action.payload}
    case FAILURE_POSTING:
        return {...state, isPosting: action.payload}
        default: 
        return state
    }
}