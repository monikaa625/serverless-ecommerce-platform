import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="app">
      <h1>Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;