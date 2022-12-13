import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
// const { WebDriver } = require("selenium-webdriver");
// var webdriver = require("selenium-webdriver");
// import webdriver from "selenium-webdriver";
// import { Builder, By, Key, until } from "selenium-webdriver";

// Create a new instance of the Chrome driver

const Cart = ({ cartItems, setCartItems }) => {
  function removeItem(index) {
    let temp_arr = cartItems.filter((ele, idx) => index !== idx);
    setCartItems(temp_arr);
  }

  const renderHref = (title) => {
    let amazonUrl = "https://www.amazon.com/s?k=";
    title = title.split(" ").join("+");
    return amazonUrl + title;
  };

  return (
    <>
      <Navbar />
      <div>
        <table className=" bg-[#FFF] rounded-md">
          <thead>
            <tr className="border-b p-6">
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Purchase</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item, index) => (
                  <tr key={`${Math.floor(Math.random() * 1000)}`}>
                    <td>
                      <img src={item.image} alt="" className="w-16" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>

                    <td className="mx-2">
                      <div
                        onClick={() => {
                          removeItem(index);
                        }}
                      >
                        <button className="bg-red-400 p-2">Remove</button>
                      </div>
                    </td>
                    <td className="p-4">
                      <a href={renderHref(item.name)} target="_blank">
                        <button className="bg-[#000] text-white p-2 rounded-sm">
                          Purchase
                        </button>
                      </a>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <div className="flex justify-center flex-col items-center">
                  <p className="p-4 text-center">
                    No items in cart add a product from the product page
                  </p>
                  <Link to="/swipe">
                    <button className="bg-[#000] p-2 rounded-md text-white">
                      Products
                    </button>
                  </Link>
                </div>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
