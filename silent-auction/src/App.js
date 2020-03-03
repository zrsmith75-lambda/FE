import React from 'react';
import BidderDash from "./components/BidderDash"
import './App.css';

// Components
import {AuctionContainer} from './components/AuctionContainer'

function App() {
  return (
    <div className="App">
      <BidderDash></BidderDash>
    </div>
  );
}

export default App;