import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { toast } from "react-toastify";
import style from "../LoginForm/style.module.scss";
import { api } from "../../../services/api";
import { useState } from "react";
import { InputPassword } from "../inputPassword";
import { NavBar } from "../../NavBar";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const userlogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", data.token);
      setUser(data.user);
      toast.success("Logado com sucesso ✅😊");
      navigate("/");
    } catch (error) {
      if (
        error.response.data.message === "Incorrect email / password combination"
      ) {
        toast.error("Email ou Senha incorretos 🙁");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    userlogin(formData);
  };

  return (
    <section>
      <NavBar />

      <form className={style.formLogin} onSubmit={handleSubmit(submit)}>
        <h2 className="title one">Login</h2>
        <Input
          label="Email"
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
          error={errors.email}
        />
        <InputPassword
          label="Senha"
          {...register("password")}
          placeholder="Digite sua senha aqui"
          error={errors.password}
        />
        <button type="submit" className="btnBig">
          Entrar
        </button>
        <span className="title Headline">Ainda não possui uma conta?</span>
        <Link className="btnBig" to="/register">
          Cadastre-se
        </Link>
      </form>
    </section>
  );
};
