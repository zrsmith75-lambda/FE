import {combineReducers} from 'redux'
import {crudReducer} from './crudReducer'
import {profileReducer} from './profileReducer'

export default combineReducers ({
    crudReducer,
    profileReducer
})