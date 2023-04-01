import React from "react";
import {  useLocation } from "react-router-dom";
import "./Retailer.css";
import Navbar from "./Navbar";

const Retailer = () => {
  const location = useLocation();
  console.log(location.state.data.prediction);
  return (
    <>
      <Navbar />
      <div className="retailer-mainContainer">
        <div className="retailer-container">
          <div className="retailer-title">
            <h1>Let's analyze customer</h1>
          </div>
          {/* <div className="retailer-specialReport">
            <h1>Special Report</h1>
            <p>Here is the special report for you</p>
            <ul>
              <li>This customer is most frequent buyer.</li>
              <li>This customer spend maximum money.</li>
              <li>This customer comes on most busy month.</li>
              <li>This customer comes on most busy time of the day.</li>
              <li>This customer comes on most busy day of week.</li>
              <li>This customer had buy most buying product.</li>
            </ul>
          </div> */}
          <div className="retailer-report">
            <h1>This Customer is</h1>
            <h2>{ location.state.data.prediction}</h2>
            <ul>
              {/* <li>{location.state.data.prediction}</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Retailer;
