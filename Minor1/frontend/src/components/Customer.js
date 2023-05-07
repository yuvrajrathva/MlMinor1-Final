import React, { useState, useEffect } from "react";
import "./Customer.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import products from "../assets/product_json.json";
import axios from "axios";
import { API_BASE_URL } from "./../config";

const Customer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [customerId, setCustomerId] = useState(0.0);
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);

  const backendUrl = API_BASE_URL;
  const navigate = useNavigate();
  //search bar
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter(
      (product) =>
        product.product &&
        product.product.toLowerCase().includes(event.target.value.toLowerCase())
    ).slice(0, 10);
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
    console.log(
      "Customer Id: " + customerId + "Data Type: " + typeof customerId
    );
    console.log("Country: " + country + "Data Type: " + typeof country);
    console.log("Product: " + product + "Data Type: " + typeof product);
    console.log("Quantity: " + quantity + "Data Type: " + typeof quantity);

    // axios
    async function sendData() {
      const response = await axios.post(backendUrl + "/predict/", {
        customer_id: customerId,
        country: country,
        product: product,
        quantity: quantity,
      });
      if (response.status === 200) {
        console.log("Success");
        navigate("/retailer", { state: { data: response.data } });
      } else {
        console.log("Error");
        alert("Error! Please try again.");
      }
    }
    sendData();
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
                  type="number"
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
