import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const LowerCart = ({  cartItems,
        setCartItems }) => {
    const [totalPrice, setTotalPrice] = useState();
    useEffect(() => {
        let vals = 0
        for (let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i].price)
            vals += parseFloat(cartItems[i].price)
        }
        console.log(vals)
        setTotalPrice(vals)
    }, [cartItems])
    
    return (
      <div className="bg-[#FFF] flex p-1 rounded-md w-full justify-center items-center">
        <div className="flex m-2">
          <p>Total Items:</p>
          <p>{cartItems.length}</p>
        </div>
        <div className="flex m-2">
          <p>Total Price:</p>
          <p>${totalPrice}</p>
            </div>
    <Link to="/cart">
        <button className="m-2 bg-[#000] text-white p-2 rounded-md">
          Go To Cart
        </button>
    </Link>
      </div>
    );
}

export default LowerCart
