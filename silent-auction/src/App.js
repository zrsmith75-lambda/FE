import React from 'react';
import BidderDash from "./components/BidderDash"
import './App.css';
import {connect} from 'react-redux'

// Components
import {AuctionContainer} from './components/AuctionContainer'

function App(props) {
  console.log(`in app.js`,props)
  return (
    <div className="App">
      <BidderDash></BidderDash>
    </div>
  );
}

export default connect(state=>{
  return{}
},{})(App);