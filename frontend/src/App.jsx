import { useState } from "react";
import "./App.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app">
      <h1 className="title">
        Serverless E-Commerce Platform
      </h1>

      <div className="cart">
        Cart: {cartCount}
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;