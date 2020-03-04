import {POSTING, SUCCESS_POSTING, FAILURE_POSTING} from '../actions'

const initialState= {
    user_id: '',
    user_type: '',
    auctions: [],
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false
    

}

export const crudReducer = (state = initialState, action) => {
    console.log(state, action)
    switch(action.type){
    case POSTING:
        return {...state, isPosting: true}
    case SUCCESS_POSTING:
        console.log(action.payload)
    return {...state, user_id: action.payload, isPosting: false}
    case FAILURE_POSTING:
        return {...state, isPosting: false}
        default: 
        return state
    }
}