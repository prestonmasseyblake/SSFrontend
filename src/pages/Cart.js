import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import TableSection from "../components/TableSection";

const Cart = ({ cartItems, setCartItems }) => {
  useEffect(() => {}, [cartItems, setCartItems]);

  return (
    <>
      <Navbar />
      <div>
        <table className=" bg-[#FFF] rounded-md">
          <thead>
            <tr className="border-b p-6 ">
              <th>
                <div className="m-2"></div>
              </th>
              <th>
                <p className="m-2">Name</p>
              </th>
              <th>Price</th>
              <th className="text-center">
                <p className="m-2 text-center">Purchase</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <TableSection cartItems={cartItems} setCartItems={setCartItems} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
