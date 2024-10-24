import { useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar">
        <h2>Shop</h2>
        <ul className="ul">
          <li onClick={handleClick}>Home</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
