import { NavBar } from "../../components/NavBar";
import { LoginForm } from "../../components/forms/LoginForm";
import style from "../LoginPage/style.module.scss";

export const LoginPage = ({ setUser }) => {
  return (
    <main className={style.boxColor}>
      <LoginForm setUser={setUser} />
    </main>
  );
};
