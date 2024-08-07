import React from "react";
import styles from "./nav.module.css";
import logo from "./assets/logo.png";
import person from "./assets/person.png";
import Form from "./Form";

const Nav = () => {
  const handleClick = () => {
    alert("good job!");
  };
  return (
    <div>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" width="40px" height="40px" />
        <ul className={styles.ul}>
          <li href="#">Home</li>
          <li href="#">My Network</li>
          <li href="#">Jobs</li>
          <li href="#">Messaging</li>
          <li href="#">Network</li>
        </ul>
        <img
          src={person}
          alt="pic"
          width="30px"
          height="30px"
          onClick={handleClick}
        />
      </nav>
    </div>
  );
};

export default Nav;
