import styles from "./nav.module.css";
import logo from "../../assets/logo.png";
import person2 from "../../assets/person2.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form");
  };
  const handleLogo = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img
          src={logo}
          alt="logo"
          width="30px"
          height="30px"
          onClick={handleLogo}
        />

        <ul className={styles.ul}>
          <li href="#">Home</li>
          <li href="#">My Network</li>
          <li href="#">Jobs</li>
          <li href="#">Messaging</li>
          <li href="#">Network</li>
        </ul>
        <img src={person2} alt="pic" onClick={handleClick} />
      </nav>
    </div>
  );
};

export default Nav;
