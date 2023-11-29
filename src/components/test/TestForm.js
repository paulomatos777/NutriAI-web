import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./TestForm.module.css";

function TestForm({ handleSubmit, btnText, testData }) {
  const [test, setTest] = useState(testData || {});

  const categories = [
    {
      key: "staging",
      value: "staging",
    },
    {
      key: "development",
      value: "development",
    },
    {
      key: "production",
      value: "production",
    },
  ];

  const states = [
    {
      key: "working",
      value: "working",
    },
    {
      key: "error",
      value: "error",
    },
  ];

  function handleChange(e) {
    setTest({ ...test, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    console.log(e);
    setTest({
      ...test,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleState(e) {
    setTest({
      ...test,
      state: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  const nomesReceitas = [
    { key: 'receita1', value: 'Lasanha de Frango' },
    { key: 'receita2', value: 'Salada Caesar' },
    { key: 'receita3', value: 'Risoto de Cogumelos' },
    { key: 'receita4', value: 'Sopa de Abóbora' },
    { key: 'receita5', value: 'Frango ao Curry' },
    { key: 'receita6', value: 'Massa Carbonara' },
    { key: 'receita7', value: 'Tacos de Carne' },
    { key: 'receita8', value: 'Strogonoff de Carne' },
    { key: 'receita9', value: 'Pizza Margherita' },
    { key: 'receita10', value: 'Macarrão à Bolonhesa' },
    { key: 'receita11', value: 'Sushi de Salmão' },
    { key: 'receita12', value: 'Salada de Quinoa' },
    { key: 'receita13', value: 'Peixe Grelhado com Legumes' },
    { key: 'receita14', value: 'Molho Pesto' },
    { key: 'receita15', value: 'Coxinhas de Frango' },
    { key: 'receita16', value: 'Feijoada' },
    { key: 'receita17', value: 'Pão de Alho' },
    { key: 'receita18', value: 'Mousse de Chocolate' },
    { key: 'receita19', value: 'Brigadeiro' },
    { key: 'receita20', value: 'Ceviche de Camarão' },
    { key: 'receita21', value: 'Torta de Limão' },
    { key: 'receita22', value: 'Cachorro-Quente' },
    { key: 'receita23', value: 'Guacamole' },
    { key: 'receita24', value: 'Creme de Aspargos' },
    { key: 'receita25', value: 'Arroz de Carne Seca' },
    { key: 'receita26', value: 'Picanha na Churrasqueira' },
    { key: 'receita27', value: 'Sanduíche de Frango' },
    { key: 'receita28', value: 'Pudim de Leite' },
    { key: 'receita29', value: 'Bolo de Cenoura' },
    { key: 'receita30', value: 'Panquecas Americanas' },
  ];

  

  return (
    <form onSubmit={(e) => handleSubmit(test, e)} className={styles.form}>
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder="Insira o nome do Teste"
        handleOnChange={handleChange}
        value={test.name}
      />
      <div>
        <Input
          type="text"
          text="Peso"
          name="description"
          placeholder="Ex: 80 kg"
          handleOnChange={handleChange}
          value={test.description}
        />
      </div>
      <div>
        <Input
          type="text"
          text="Altura"
          name="height"
          placeholder="Ex: 160 cm"
          handleOnChange={handleChange}
          value={test.description}
        />
      </div>
      <div>
        <Select
          name="envirement_id"
          text="Selecione 1 de 5 receitas que voce gosta"
          options={nomesReceitas}
          handleOnChange={handleCategory}
          value={test.category ? test.category.name : ""}
        />
      </div>
      <div>
        <Select
          name="status_id"
          text="Selecione 2 de 5 receitas que voce gosta"
          options={nomesReceitas}
          handleOnChange={handleState}
          value={test.state ? test.state.id : ""}
        />
      </div>
      <div>
        <Select
          name="status_id"
          text="Selecione 3 de 5 receitas que voce gosta"
          options={nomesReceitas}
          handleOnChange={handleState}
          value={test.state ? test.state.id : ""}
        />
      </div>
      <div>
        <Select
          name="status_id"
          text="Selecione 4 de 5 receitas que voce gosta"
          options={nomesReceitas}
          handleOnChange={handleState}
          value={test.state ? test.state.id : ""}
        />
      </div>
      <div>
        <Select
          name="status_id"
          text="Selecione 5 de 5 receitas que voce gosta"
          options={nomesReceitas}
          handleOnChange={handleState}
          value={test.state ? test.state.id : ""}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}
export default TestForm;
