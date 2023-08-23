import { useContext } from "react";
import { Input } from "../forms/Inputs";
import { TechContext } from "../../providers/TechContext";
import style from "./style.module.scss";
import { TodoContext } from "../../providers/TodoContextLogin";
import { useForm } from "react-hook-form";

export const EditTechModal = () => {
  const { setIsOpenEdit, editTech, techUpdate } = useContext(TechContext);
  const { loading } = useContext(TodoContext);
  const { register, handleSubmit } = useForm({
    values: {
      title: editTech.title,
      status: editTech.status,
    },
  });

  const submit = (formData) => {
    techUpdate(formData);
  };

  return (
    <aside className={style.modalOverlay} role="dialog">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <h2>Tecnologia Detalhes</h2>
          <span onClick={() => setIsOpenEdit(false)}>X</span>
        </div>
        <Input
          label="Nome do projeto"
          type="text"
          placeholder="Digite uma Tech"
          {...register("title")}
        />

        <label className="label">Status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button type="submit" disabled={loading} className="btnBig">
          {loading ? "Carregando..." : "Salvar alterações"}
        </button>
      </form>
    </aside>
  );
};
