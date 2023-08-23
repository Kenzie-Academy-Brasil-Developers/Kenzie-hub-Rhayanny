import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { TodoContext } from "./TodoContextLogin";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editTech, setEditTech] = useState(false);
  const { setTechList, techList } = useContext(TodoContext);

  const techUpdate = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(`/users/techs/${editTech.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.map((tech) => {
        if (tech.id === editTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      setIsOpenEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const postTechCreat = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList([...techList, data]);
      setIsOpen(false);
      toast.success("Tech criada com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (id) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newPostList = techList.filter((tech) => tech.id !== id);
      setTechList(newPostList);
      toast.success("Tech deletada com sucesso 🗑️");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isOpenEdit,
        setIsOpenEdit,
        postTechCreat,
        deleteTech,
        setEditTech,
        editTech,
        techUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
