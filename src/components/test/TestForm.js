import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./TestForm.module.css";

function TestForm({ btnText, handleSubmit, testData }) {
  const [categories, setCategories] = useState([]);
  const [test, setTest] = useState(testData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault(); //previne page reload
    // console.log(test);
    handleSubmit(test);
  };

  function handleChange(e) {
    setTest({ ...test, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setTest({
      ...test,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Teste"
        name="name"
        placeholder="Insira o nome do Teste"
        handleOnChange={handleChange}
        value={test.name}
      />
      <div>
        <Input
          type="text"
          text="Descrição do Teste"
          name="description"
          placeholder="Descrição"
          handleOnChange={handleChange}
          value={test.description}
        />
      </div>
      <div>
        <Select
          name="envirement_id"
          text="Selecione o Ambiente"
          options={categories}
          handleOnChange={handleCategory}
          value={test.category ? test.category.id : ""}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}
export default TestForm;
