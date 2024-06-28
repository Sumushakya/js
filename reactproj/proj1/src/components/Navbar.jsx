import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className={styles.navul}>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#"> Contact</li>
        </ul>
        <button className={styles.button}>Login</button>
      </nav>
    </div>
  );
}
