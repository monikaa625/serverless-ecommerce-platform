import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  return (
    <div className="app">
      <h1 className="title">Products</h1>

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

export default Products;