import { useNavigate } from "react-router-dom";
import TestForm from "../test/TestForm";
import styles from "./NewTask.module.css";

function NewTask() {
  const navigate = useNavigate();

  function createPost(test) {
    fetch("http://localhost:5000/testes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(test),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/testes", {
          state: { message: "Projeto criado com sucesso!" },
        });

        // navigate.push("/tests", { message: "Teste criado com sucesso" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newtask_container}>
      <h1>Criar Teste</h1>
      <p>Crie seu Teste para depois adicionar a Lista </p>
      <TestForm handleSubmit={createPost} btnText="Criar teste" />
    </div>
  );
}
export default NewTask;
