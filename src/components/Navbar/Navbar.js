import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo.svg";

const Navbar = () => (
  <div className={styles.wrapper}>
    <img src={logo} alt="logo" />
    <h3 className={styles.header}>my travel journal.</h3>
  </div>
);

export default Navbar;
