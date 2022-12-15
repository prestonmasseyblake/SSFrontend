import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import About from "./pages/About";
import axios from "axios";
import Signup from "./pages/Signup";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get("/api/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // localStorage.setItem(res.data.username, JSON.stringify(cartItems));
        localStorage.setItem("profile", res.data.username);
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {}, [cartItems]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/swipe"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
