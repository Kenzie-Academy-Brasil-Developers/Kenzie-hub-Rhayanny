import { MdAdd } from "react-icons/md";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { CreateTechModal } from "../CreateTechModal";
import { TechCard } from "./TechCard";
import style from "../TechList/style.module.scss";
import { EditTechModal } from "../EditTechModal";
import { TodoContext } from "../../providers/TodoContextLogin";

export const TechList = () => {
  const { isOpen, setIsOpen, isOpenEdit } = useContext(TechContext);
  const { setTechList, techList } = useContext(TodoContext);

  return (
    <section className={style.listCard}>
      <div>
        <h1 className="title two">Tecnologias</h1>
        <button className="btnBig" onClick={() => setIsOpen(true)}>
          <MdAdd />
        </button>
      </div>

      <ul>
        {techList.length === 0 ? (
          <p className="title two">Nada adicionado ainda 😕❌</p>
        ) : (
          techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
        )}
      </ul>
      {isOpen ? <CreateTechModal /> : null}
      {isOpenEdit ? <EditTechModal /> : null}
    </section>
  );
};
