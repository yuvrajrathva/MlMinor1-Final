import React, { useState, useEffect } from "react";
import "./Customer.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import products from "../assets/product_json.json";

const Customer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [customerId, setCustomerId] = useState(0.0);
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);

  //search bar
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter(
      (product) =>
        product.product &&
        product.product.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }

  //Customer Id
  function handleCustomerIdChange(event) {
    setCustomerId(event.target.value);
    console.log(customerId);
  }
  //Location
  function handleLocationChange(event) {
    setCountry(event.target.value);
    console.log(country);
  }
  //Time
  function handleTimeChange(event) {
    setTime(event.target.value);
    console.log(time);
  }
  //Product
  function handleCheckboxChange(event) {
    setProduct(event.target.value);
    console.log(product);
  }

  //Quantity
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
    console.log(quantity);
  }

  function handleClick() {
    // Send all amount to backend from here
    console.log("Submitted");
    console.log("Customer Id: " + customerId + "Data Type: " + typeof customerId);
    console.log("Country: " + country + "Data Type: " + typeof country);
    console.log("Time: " + time + "Data Type: " + typeof time);
    console.log("Product: " + product + "Data Type: " + typeof product);
    console.log("Quantity: " + quantity + "Data Type: " + typeof quantity);
  }

  return (
    <>
      <Navbar />
      <div className="customerForm-mainContainer">
        <div className="customerForm-container">
          <div className="customerForm-title">
            <h1>Wanna get recommendations of relevant products?</h1>
            <p>
              Fill the form below and we will recommend you the best products
            </p>
          </div>
          <hr />
          <div className="customerForm-form">
            <form
              id="product-form"
              action=""
              // onSubmit={(e) => {handleClick()}}
              // onSubmit={(e) => {handleClick()}}
              // method="POST"
            >
              <div className="customer-id">
                <label>Customer Id</label>
                <input
                  type="text"
                  id="customerId-input"
                  placeholder="ID"
                  onChange={handleCustomerIdChange}
                  required
                />
              </div>
              <div className="customer-location">
                <div className="customerForm-input">
                  <label htmlFor="location">Location </label>
                  <p>Enter your current locating country</p>
                  <select
                    name="location"
                    onChange={handleLocationChange}
                    required
                  >
                    <option value="International">International</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>
              {/* <div className="customer-time">
                <label htmlFor="date-time-input">Select a date and time</label>
                <input
                  type="datetime-local"
                  id="date-time-input"
                  name="date-time"
                  max="2011-12-09T12:50:00"
                  min="2010-12-01T08:26:00"
                  onChange={handleTimeChange}
                  required
                />
              </div> */}
              <div
                className="products-optionContainer"
                id="products-optionContainer"
              >
                <h1>Products</h1>
                <p>
                  Enter any 1 product with its corresponding quantity and get
                  relatable product recommendations.
                </p>
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <div id="product-list">
                  {filteredProducts.map((product) => (
                    <label key={product.product}>
                      <div className="customerForm-radio">
                        <input
                          type="checkbox"
                          value={product.product}
                          name={product.product}
                          onChange={handleCheckboxChange}
                        />
                        {product.product}
                      </div>
                      <div className="customerForm-quantity">
                        <input
                          type="number"
                          name={product.product}
                          placeholder="Quantity"
                          min="0"
                          onChange={handleQuantityChange}
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div id="submit-btn" type="submit" onClick={handleClick}>
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;