import Input from "../form/Input";
import styles from "./TestForm.module.css";

function TestForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text=" Nome do Teste"
        placeholder="Insira o nome do Teste"
      />
      <div>
        <select name="enviroment_id">
          <option disabled selected>
            Selecione o ambiente de Teste
          </option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="Descrição do Teste" />
      </div>
      <div>
        <input type="submit" value="Criar Teste" />
      </div>
    </form>
  );
}
export default TestForm;
