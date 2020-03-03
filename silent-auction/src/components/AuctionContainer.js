import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from '../utils/PrivateRoute'

import {Navigation} from './Navigation'
import AuctionPage from './AuctionPage'
import Login from './Login'
import Signup from './Signup'
import SellerDash from './SellerDash'
import BidderDash from './BidderDash'

export const AuctionContainer = () => {


    
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route exact path='/auctions' component={AuctionPage}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/login' component={Login}/>
                <PrivateRoute exact path='/dashboard/seller/:id' component={SellerDash}/>
                <PrivateRoute exact path='/dashboard/bidder/:id' component={BidderDash}/>
            </Switch>
            
        </div>
    )
}
