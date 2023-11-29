import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import TestForm from "../test/TestForm";
import styles from "./NewTask.module.css";

function NewTask() {
  const navigate = useNavigate();
  function handleSubmit(test, e) {
    e.preventDefault();
    api.post("/testes", {
      test_title: test.name,
      test_description: test.description,
      author: test.name,
      test_status: test.state.name,
      test_environment: test.category.name,
    });
    navigate("/testes");
  }

  return (
    <div className={styles.newtask_container}>
      <h1>Gerar Receita</h1>
      <p>Receba sugestões de receitas apenas selecionando os alimentos de sua preferencia </p>
      <TestForm btnText="Criar Receita" handleSubmit={handleSubmit} />
    </div>
  );
}
export default NewTask;
