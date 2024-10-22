import { useNavigate } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar">
        <h2>Shop</h2>
        <ul className="ul">
          <li onClick={handleClick}>Home</li>
          <li>Add to cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
