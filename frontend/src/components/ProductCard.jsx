function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;