import styles from "./Home.module.css";
import photo from "../../img/image 59.png";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Nutri AI</span>
      </h1>
      <p>Seu gerador de Receitas personalizados</p>
      <LinkButton to="/newtask" text="Gerar Receitas" />
      <img src={photo} alt="photo" className={styles.img} />
    </section>
  );
}
export default Home;
