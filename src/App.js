import './App.css';
import {useEffect, useState} from "react"
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Cart from './pages/Cart';
import About from "./pages/About"
const App = () => {
  const [cartItems, setCartItems] = useState([])
  console.log(cartItems)
  return (
    <>
      {/* <Login /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/" element={<Login />} />
          <Route
            path="/swipe"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
