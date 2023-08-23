import { MdDelete, MdEdit } from "react-icons/md";
import style from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { setIsOpenEdit, deleteTech, setEditTech } = useContext(TechContext);

  const modalInfo = () => {
    setIsOpenEdit(true);
    setEditTech(tech);
  };

  return (
    <li className={style.card}>
      <div>
        <h3 className="title two">{tech.title}</h3>
        <span>
          <p className="Headline">{tech.status}</p>
          <button onClick={() => modalInfo()} title="Editar" aria-label="edit">
            <MdEdit />
          </button>
          <button
            onClick={() => deleteTech(tech.id)}
            title="Delete"
            aria-label="delete"
          >
            <MdDelete />
          </button>
        </span>
      </div>
    </li>
  );
};
