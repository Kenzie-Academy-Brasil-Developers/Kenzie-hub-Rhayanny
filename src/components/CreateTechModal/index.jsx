import { useContext } from "react";
import { Input } from "../forms/Inputs";
import { TechContext } from "../../providers/TechContext";
import style from "./style.module.scss";
import { TodoContext } from "../../providers/TodoContextLogin";
import { useForm } from "react-hook-form";

export const CreateTechModal = () => {
  const { setIsOpen, postTechCreat } = useContext(TechContext);
  const { register, handleSubmit } = useForm();
  const { loading } = useContext(TodoContext);

  const submit = (formData) => {
    postTechCreat(formData);
  };

  return (
    <aside className={style.modalOverlay} role="dialog">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <span onClick={() => setIsOpen(false)}>X</span>
        </div>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite uma Tech"
          {...register("title")}
        />

        <label className="label">Selecionar status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button type="submit" disabled={loading} className="btnBig">
          {loading ? "Carregando..." : "Cadastrar Tecnologia"}
        </button>
      </form>
    </aside>
  );
};
