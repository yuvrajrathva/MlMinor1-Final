import React from "react";
import "./Retailer.css";
import Navbar from "./Navbar";

const Retailer = () => {
  return (
    <>
      <Navbar />
      <div className="retailer-mainContainer">
        <div className="retailer-container">
          <div className="retailer-title">
            <h1>Let's analyze customer</h1>
          </div>
          <div className="retailer-specialReport">
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
          </div>
          <div className="retailer-report">
            <h1>Cluster of this Customer</h1>
            <p>Here is the cluster of this customer</p>
            <ul>
              <li>Cluster 1</li>
              <li>Cluster 2</li>
              <li>Cluster 3</li>
              <li>Cluster 4</li>
              <li>Cluster 5</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Retailer;
