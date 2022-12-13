import React from "react";
import { Link } from "react-router-dom";
const TableSection = ({ cartItems, setCartItems }) => {
  function removeItem(index) {
    let temp_arr = cartItems.filter((ele, idx) => index !== idx);
    setCartItems(temp_arr);
  }

  const renderHrefCJ = (title) => {
    let CJUrl = "https://cjdropshipping.com/search/";
    title = title.split(" ").join("+");
    return CJUrl + title;
  };

  const renderHref = (title) => {
    let amazonUrl = "https://www.amazon.com/s?k=";
    title = title.split(" ").join("+");
    return amazonUrl + title;
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <tr className="p-2">
              <td>
                <div className="m-4">
                  <img src={item.image} alt="" className="w-16" />
                </div>
              </td>
              <td>
                <p className="mx-2">{item.name}</p>
              </td>
              <td className="mx-2">
                <p className="font-bold m-4">{item.price}</p>
              </td>

              <td className="mx-1">
                <div
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  <button className="bg-red-400 p-2 rounded-sm text-white">
                    Remove
                  </button>
                </div>
              </td>
              <td className="p-2">
                <a href={renderHref(item.name)} target="_blank">
                  <button className="bg-[#FF9900] text-white p-2 rounded-sm">
                    Amazon
                  </button>
                </a>
              </td>
              <td className="p-4">
                <a href={renderHrefCJ(item.name)} target="_blank">
                  <button className="bg-blue-400 text-white border border-gray-400  p-2 rounded-sm">
                    CJ Drop
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
    </>
  );
};

export default TableSection;
