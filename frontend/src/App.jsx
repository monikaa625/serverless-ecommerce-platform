import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Serverless E-Commerce Platform</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default App;