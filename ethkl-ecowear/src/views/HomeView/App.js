import { FC } from "react";
import { ethers } from "ethers"
import './App.css';
import * as React from 'react';
//import { abi } from "./abi"

function App() {

  return (
    <div>
      <div className="container mx-auto max-w-5xl p-4 2xl:px-0">
        <header className="App-header">
          <div style={{ display: "flex"}} className=" hero content">
            <h1 className="mb-2 ml-10 text-3xl font-display">
              Welcome to EcoWear.
            </h1>
        
          
            <div style={{ margin: "50px 0", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
              <button className="custom-button">Buy</button>
              <button className="custom-button">Sell</button>
              <button className="custom-button">Manufacturer</button>
            </div>
          </div>
          <div>
            <p className="mb-1">
              building eco-friendly and socially responsible fashion ecosystem
            </p>
            <div className="card"></div>
          </div>
        </header>
      </div>
   </div>
  );
}

export default App;
