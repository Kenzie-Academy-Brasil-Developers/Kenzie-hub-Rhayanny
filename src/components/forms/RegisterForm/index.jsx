import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Inputs";
import { resgisterFormScheme } from "./registerFormScheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { InputPassword } from "../inputPassword";
import style from "../RegisterForm/style.module.scss";
import { NavBar } from "../../NavBar";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resgisterFormScheme),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Cadastrado com sucesso 😉");
      navigate("/");
    } catch (error) {
      if (error.response.data.message === "Email already exists") {
        toast.error("Usuário já cadastrado 😉");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    userRegister(formData);
  };

  return (
    <section>
      <nav>
        <NavBar>
          <Link to="/">Voltar</Link>
        </NavBar>
      </nav>

      <form className={style.formRegister} onSubmit={handleSubmit(submit)}>
        <h2 className="title one">Crie sua conta</h2>
        <span className="title Headline">Rapido e grátis, vamos nessa! 😁</span>

        <Input
          label=" Nome"
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
          error={errors.name}
          disabled={loading}
        />

        <Input
          label="Email"
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
          error={errors.email}
          disabled={loading}
        />

        <InputPassword
          label="Senha"
          {...register("password")}
          placeholder="Digite sua senha aqui"
          error={errors.password}
          disabled={loading}
        />

        <InputPassword
          label="Confirmar Senha"
          {...register("confirmPassword")}
          placeholder="Digite novamente sua senha"
          error={errors.confirmPassword}
          disabled={loading}
        />

        <Input
          label="Bio"
          type="text"
          {...register("bio")}
          placeholder="Fale sobre você"
          error={errors.bio}
          disabled={loading}
        />

        <Input
          label="Contato"
          type="text"
          {...register("contact")}
          placeholder="Opção de contato"
          error={errors.Contact}
          disabled={loading}
        />

        <label className="label">Selecione um módulo</label>
        <select {...register("course_module")} disabled={loading}>
          <option value="Primeiro Módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo Módulo  (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro Módulo  (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto Módulo  (Backend Avançado)">
            Quarto módulo
          </option>
        </select>

        <button className="btnBig" disabled={loading} type="submit">
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </section>
  );
};
