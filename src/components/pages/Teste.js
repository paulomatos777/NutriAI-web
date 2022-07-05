import styles from "./Teste.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import TestForm from "../test/TestForm";
import Message from "../layout/Message";

function Teste() {
  const { id } = useParams();

  const [teste, setTeste] = useState([]);
  const [showTesteForm, setShowTesteForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/testes/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setTeste(data);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, [id]);

  function toogleProjectForm() {
    setShowTesteForm(!showTesteForm);
  }

  function editPost(teste) {
    fetch(`http://localhost:5000/testes/${teste.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(teste),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTeste(data);
        setShowTesteForm(false);
        setMessage("Projeto Atualizado!");
        setType("sucess");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {teste.name ? (
        <div className={styles.teste_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Teste: {teste.name}</h1>
              <button className={styles.btn} onClick={toogleProjectForm}>
                {!showTesteForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showTesteForm ? (
                <div className={styles.teste_info}>
                  <p>
                    <span>Ambiente: </span>
                    {teste.category.name}
                  </p>
                  <p>
                    <span>Nome: </span>
                    {teste.name}
                  </p>
                  <p>
                    <span>Descrição: </span>
                    {teste.description}
                  </p>
                </div>
              ) : (
                <div className={styles.teste_info}>
                  <TestForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    testData={teste}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Teste;
