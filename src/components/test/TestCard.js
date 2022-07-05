import styles from "./TestCard.module.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function TestCard({ id, name, description, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };
  return (
    <div className={styles.test_card}>
      <h4>{name}</h4>
      <p>
        <span>Descrição:</span>
        {description}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.test_card_actions}>
        <Link to="/">
          {" "}
          <BsFillPencilFill />
          Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Remover
        </button>
      </div>
    </div>
  );
}
export default TestCard;
