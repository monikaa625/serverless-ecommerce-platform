import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Serverless E-Commerce Platform</h1>

      <h2>Cart: {cartCount}</h2>

      <h2>Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default App;