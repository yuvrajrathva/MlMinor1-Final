import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import homepageImg from "../assets/homepage-img.svg"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <div className="homepageTop" id="homepageTopId">
          <div className="homepage-left">
            <h1 className="homepageTitle">
              Discover your perfect match today!
            </h1>
            <p className="homepageDescription">
              Discover the perfect item for you among our wide selection.
            </p>
            <p className="homepageDescription">
              Say farewell to wasted effort and forgotten necessities thanks to
              our streamlined recommendation system.
            </p>
            <div className="homepageButton">
              <a href="customer/">
                <button className="homepageButton-customer">Customer</button>
              </a>
              <a href="retailer/">
                <button className="homepageButton-retailer">Retailer</button>
              </a>
            </div>
            <div className="geeks"></div>
          </div>
          <div className="homepage-right">
            <img src={homepageImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home