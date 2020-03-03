import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function AuctionList() {
const [auctions, setAuctions]= useState([])

useEffect(()=>{
    axiosWithAuth().get('/api/auctions')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

    return (
        <div>
            Hello
            
        </div>
    )
}
