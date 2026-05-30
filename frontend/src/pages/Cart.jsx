function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>

              <p>${item.price}</p>

              <button
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>

              <hr />
            </div>
          ))}

          <h2>Total: ${total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;