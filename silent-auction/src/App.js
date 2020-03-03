import React from 'react';
import Login from "./components/Login"
import Signup from "./components/Signup"
import AuctionPage from "./components/AuctionPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Signup></Signup>
      <AuctionPage />
    </div>
  );
}

export default App;
