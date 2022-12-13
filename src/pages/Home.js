import React, { useState, useEffect } from "react";
import SnowBackground from "../components/snowBackground";
import SwipeContainer from "../components/SwipeContainer";
import axios from "axios";
import { Product } from "../utils/Product";
import { items } from "../utils/items";
import Navbar from "../components/navbar";
import LowerCart from "../components/LowerCart";
const Home = ({ cartItems, setCartItems }) => {
  // console.log("items: ",items)
  // const [products, setProducts] = useState()

  const createItems = (items) => {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
      // console.log(items[i]);
      let temp = Product(
        items[i].productNameEn,
        items[i].sellPrice,
        items[i].categoryName,
        items[i].productImage
      );
      arr.push(temp);
    }

    return arr;
  };

  const products = createItems(items);

  useEffect(() => {}, [cartItems]);

  return (
    <div>
      <Navbar />
      <SnowBackground />
      <SwipeContainer
        cartItems={cartItems}
        setCartItems={setCartItems}
        products={products}
      />
      <LowerCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
