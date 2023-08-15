import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import style from "../LoginForm/style.module.scss";
import { useContext } from "react";
import { InputPassword } from "../inputPassword";
import { NavBar } from "../../NavBar";
import { TodoContext } from "../../../providers/TodoContextLogin";

export const LoginForm = () => {
  const { userlogin } = useContext(TodoContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

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
