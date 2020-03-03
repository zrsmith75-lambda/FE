import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {Navigation} from './Navigation'
import AuctionPage from './AuctionPage'
import Login from './Login'
import Signup from './Signup'

export const AuctionContainer = () => {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route exact path='/auctions' component={AuctionPage}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/login' component={Login}/>
            </Switch>
            
        </div>
    )
}
