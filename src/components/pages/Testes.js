import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Testes.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import TestCard from "../test/TestCard";
import { useState, useEffect } from "react";

function Testes() {
  const [testes, setTestes] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/testes", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTestes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.test_container}>
      <div className={styles.title_container}>
        <div>
          <h1>Meus Testes</h1>
        </div>
        <div>
          <LinkButton to="/newtask" text="Criar Teste" className={styles.btn} />
        </div>
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass="start">
        {testes.length > 0 &&
          testes.map((teste) => (
            <TestCard
              id={teste.id}
              name={teste.name}
              description={teste.description}
              category={teste.category.name}
              key={teste.id}
            />
          ))}
      </Container>
    </div>
  );
}
export default Testes;
