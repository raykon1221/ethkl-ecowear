import React from 'react';
import './Sell.css';

function App() {
  return (
    
    <div className='sell'>

            <h1 className="EcoWear">
              EcoWear
            </h1>


    <div className ="navbar">
    <div style={{ margin: "50px 0", flexDirection: "row", gap: "3px" }}>
    <button className="custom-button">Buy</button>
    <button className="custom-button">Sell</button>
    <button className="custom-button">Manufacturer</button>
  </div>
  </div>
    <div className="product">
      <h2 className="title">
        Fill in the basic information of your item
      </h2>
  <form>
    <div className="product_title">
      <h3>Name of product</h3>
      <input type="text" style={{ backgroundColor: "#ECCEED", height: "30px", width: "100%" }} />
    </div>
    <div style={{ clear: "both" }}></div> {/* This clears the floats */}
    <div className="product_desc">
      <h3>Description</h3>
      <input type="text" style={{ backgroundColor: "#ECCEED", height: "200px", width: "100%" }} />
    </div>
      <div className='right'>
        <div className="num_of_unit">
          <h3>Number of units available</h3>
          <input type="text" style={{ backgroundColor: "#ECCEED", height: "30px", width: "100px" }} />
        </div>
        <div className="dimension">
          <h3>Dimensions (optional)</h3>
          <h3>Length</h3>
          <input type="number" placeholder="0" style={{ backgroundColor: "#ECCEED", height: "30px", width: "30px" }} />
          <h3>Width</h3>
          <input type="number" placeholder="0" style={{ backgroundColor: "#ECCEED", height: "30px", width: "30px" }} />
          <h3>Height</h3>
          <input type="number" placeholder="0" style={{ backgroundColor: "#ECCEED", height: "30px", width: "30px" }} />
        </div>
        <div className="Price">
        <h3>Price</h3>
        <input type="text" style={{ backgroundColor: "#ECCEED", height: "30px", width: "100px" }} />
        </div>
       </div>
    <div className='center'>
        <button className='Next' >Next</button>
   </div>
      </form>
    </div>
    </div>
  );
}

export default Sell;
