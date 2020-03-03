import React from 'react'
import { Link } from 'react-router-dom'


export const Navigation = () => {
    return (
        <div>
            <Link to='/auctions'>Auctions</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign up</Link>
            <Link to='/sellerdash'>Seller Dash</Link>
        </div>
    )
}
