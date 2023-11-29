import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/p_ogo.svg";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <div className={styles.logoWrapper}>
            <img src={logo} alt="Nutri AI Logo" className={styles.img} />
            <span className={styles.test}>
              <h3>Receitas Personalizadas</h3>
            </span>
          </div>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          {/* <li className={styles.item}>
            <Link to="/testes">Testes</Link>
          </li> */}
        </ul>
      </Container>
    </div>
  );
}
export default Navbar;
