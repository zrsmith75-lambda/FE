import {axiosWithAuth} from '../utils/axiosWithAuth'

export const getItem = () => {
    return(dispatch) => {
        axiosWithAuth().get('/api/auctions')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const postLogin = () => {
    
}