import React from 'react'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'


export const Navigation = () => {

    const history = useHistory()
    const token = window.localStorage.getItem('token')

    const signOut = (e)  => {
        e.preventDefault()
        window.localStorage.removeItem('token')
        history.push('/login')
    }

    
    return token ? ( 
    <div>
        <Link to='/auctions'>Auctions</Link>
        <Link to='/dashboard/seller/:id'>Seller Dash</Link>
        <Link to='/dashboard/bidder/:id'>Bidder Dash</Link>
        <button onClick={signOut}>Sign out</button>
    </div>
):(null)
}
