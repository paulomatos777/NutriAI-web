import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./TestForm.module.css";

function TestForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Teste"
        placeholder="Insira o nome do Teste"
      />
      <div>
        <Input type="text" text="Descrição do Teste" placeholder="Descrição" />
      </div>
      <div>
        <Select name="envirement_id" text="Selecione o Ambiente" />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}
export default TestForm;
