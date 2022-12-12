import React from 'react'
import Navbar from "../components/navbar";
// const { WebDriver } = require("selenium-webdriver");
// var webdriver = require("selenium-webdriver");
// import webdriver from "selenium-webdriver";
// import { Builder, By, Key, until } from "selenium-webdriver";

// Create a new instance of the Chrome driver

const Cart = ({cartItems, setCartItems}) => {


    
    const handlePurchase = async() => {
        // const driver = new WebDriver("chrome");

        // Navigate to a page
        // await driver.get("https://example.com");
       
    }

    

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
              {cartItems.map((item, index) => (
                <tr>
                  <td>
                          <img src={item.image} alt="" className="w-16" />
                  </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td className="mx-2">
                      <button className="bg-red-400 p-2">Remove</button>
                      </td>
                  <td className="p-4">
                    <button
                      className="bg-[#000] text-white p-2 rounded-sm"
                      onClick={handlePurchase()}
                    >
                      Purchase
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Cart
