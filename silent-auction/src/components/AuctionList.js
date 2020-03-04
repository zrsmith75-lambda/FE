import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchingAuction} from '../actions'

function AuctionList(props) {
    console.log(props.auctions)
const [auctions, setAuctions]= useState([])

useEffect(()=>{
    props.fetchingAuction()
}, [])

    return (
        <div>
            Hello
            
        </div>
    )
}

export default connect(state=> {
    return{
        auctions: state.auctions
    }
}, {fetchingAuction})(AuctionList)
