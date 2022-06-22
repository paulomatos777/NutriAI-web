import TestForm from "../test/TestForm";
import styles from "./NewTask.module.css";

function NewTask() {
  return (
    <div className={styles.newtask_container}>
      <h1>Criar Teste</h1>
      <p>Crie seu Teste para depois adicionar a Lista </p>
      <TestForm />
    </div>
  );
}
export default NewTask;
