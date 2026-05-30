import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
        background: "#222",
      }}
    >
      <Link style={{ color: "white" }} to="/">
        Home
      </Link>

      <Link style={{ color: "white" }} to="/products">
        Products
      </Link>

      <Link style={{ color: "white" }} to="/cart">
        Cart ({cartCount})
      </Link>

      <Link style={{ color: "white" }} to="/login">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;