import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products addToCart={addToCart} />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} />
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;